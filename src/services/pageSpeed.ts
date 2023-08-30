import axios, { AxiosInstance } from 'axios'

export default class PageSpeedService {
  private PageSpeedAPI: AxiosInstance
  constructor() {
    this.PageSpeedAPI = axios.create({
      baseURL: 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
      timeout: 0,
      params: {
        key: process.env.PAGESPEED_API_KEY,
        locale: 'pt-BR',
      },
    })
  }

  async getAudits(url: string) {
    try {
      const response = await this.PageSpeedAPI.get('', {
        params: {
          url,
        },
      })
      return this.formatResponse(response.data)
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching audits')
    }
  }

  private formatResponse(data: any) {
    return data.lighthouseResult.audits
  }
}
