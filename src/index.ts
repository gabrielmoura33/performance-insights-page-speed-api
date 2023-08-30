/* eslint-disable no-case-declarations */
import 'reflect-metadata'
import 'dotenv/config'
import { AppDataSource } from './typeorm/datasources'
import { Action } from './typeorm/entities/action'
import PageSpeedService from './services/pageSpeed'
import fs from 'fs'
import inquirer from 'inquirer'
import { Parser } from 'json2csv'
import * as XLSX from 'xlsx'

class Handler {
  pageSpeedService: PageSpeedService
  constructor() {
    this.pageSpeedService = new PageSpeedService()
  }

  async init() {
    const { actionName, output } = await inquirer.prompt([
      {
        type: 'input',
        name: 'actionName',
        message: 'Informe o nome da ação',
      },
      {
        type: 'list',
        name: 'output',
        message: 'Escolha o tipo de saida para o resultado',
        choices: ['json', 'csv', 'xlsx'],
      },
    ])

    return this.handle(actionName, output)
  }

  async handle(actionName: string, output: string) {
    await AppDataSource.connect()
    const ActionsRepository = AppDataSource.getRepository(Action)

    const action = await ActionsRepository.findOne({
      where: { name: actionName },
    })
    if (!action) return

    console.time()
    const audits = await this.pageSpeedService.getAudits(action?.activeUrl)
    this.exportData(audits, output)
    console.timeEnd()
  }

  exportData(data: any, format: string) {
    switch (format) {
      case 'json':
        fs.writeFileSync('audits.json', JSON.stringify(data, null, 2))
        break
      case 'csv':
        const parser = new Parser()
        const csv = parser.parse(data)
        fs.writeFileSync('audits.csv', csv)
        break
      case 'xlsx':
        const worksheet = XLSX.utils.json_to_sheet(data)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Audits')
        XLSX.writeFile(workbook, 'audits.xlsx')
        break
    }
  }
}

new Handler().init()
