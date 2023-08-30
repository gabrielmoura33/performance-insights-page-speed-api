import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({
  name: 'Actions',
})
export class Action {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true, type: 'int' })
  saiId: number

  @Column({ nullable: false, type: 'varchar', length: 256 })
  name: string

  @Column({ nullable: true, type: 'varchar', length: 128 })
  identifier: string

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['BEFORE', 'ACTIVE', 'AFTER', 'INACTIVE'],
    default: 'ACTIVE',
  })
  status: string

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['NONE', 'ALL', 'KRUX', 'GA', 'DMP', 'DEEPLINK'],
    default: 'NONE',
  })
  seoTrackerType: string

  @Column({ nullable: true, type: 'varchar', length: 128 })
  kxEvent: string

  @Column({ nullable: true, type: 'varchar', length: 128 })
  kxAdvertiser: string

  @Column({ nullable: true, type: 'varchar', length: 128 })
  kxCampaign: string

  @Column({ nullable: true, type: 'varchar', length: 128 })
  kxProgram: string

  @Column({ default: true, type: 'boolean' })
  active: boolean

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  beforeUrl: string

  @Column({ nullable: false, type: 'varchar', length: 1024 })
  activeUrl: string

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  inactiveUrl: string

  @Column({ nullable: true, type: 'varchar', length: 1024 })
  afterUrl: string

  @Column({ nullable: false, type: 'varchar', length: 256 })
  shortenUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  iosBeforeUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  androidBeforeUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  iosActiveUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  androidActiveUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  iosAfterUrl: string

  @Column({ nullable: true, type: 'varchar', length: 256 })
  androidAfterUrl: string

  @Column({ nullable: false, type: 'varchar', length: 512 })
  qrCodeImageUrl: string

  @Column({ nullable: true, type: 'boolean', default: null })
  hasImage: boolean

  @Column({ nullable: false, type: 'boolean', default: false })
  deleted: boolean

  @Column({ nullable: true, type: 'date' })
  startDate: Date

  @Column({ nullable: true, type: 'date' })
  endDate: Date

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['NONE', 'BREAK', 'MERCHAN', 'OUTROS', 'EDITORIAL', 'CORPORATIVO'],
    default: 'NONE',
  })
  exhibitionTiming: string

  @Column({ nullable: false, type: 'boolean', default: true })
  sendEmail: boolean

  @Column({ nullable: true, type: 'varchar' })
  sponsorshipProject: string

  @Column({ nullable: false, type: 'boolean', default: true })
  blockUrlModification: boolean

  @Column({
    nullable: false,
    type: 'date',
    default: () => "CURRENT_TIMESTAMP + INTERVAL '30' DAY",
  })
  expirationDate: Date

  @Column({
    nullable: false,
    type: 'enum',
    enum: [
      'NONE',
      'PROMOTION',
      'DISCOUNT',
      'COUPON',
      'ENGAGEMENT',
      'KNOW_MORE',
    ],
    default: 'NONE',
  })
  characteristics: string

  @Column({
    nullable: true,
    type: 'enum',
    enum: ['NONE', 'AVAILABLE', 'UNSTABLE', 'UNAVAILABLE'],
    default: 'NONE',
  })
  urlStatus: string

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['DEFAULT', 'RECURRENT', 'LIMITLESS'],
    default: 'DEFAULT',
  })
  periodicity: string

  @Column({ nullable: true, type: 'varchar', length: 7 })
  idAction: string

  @Column({
    type: 'int',
  })
  userId: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
