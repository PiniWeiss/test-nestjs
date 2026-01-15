import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey
} from 'sequelize-typescript';


@Table
export class Item extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true
  })
  declare id: number;

  @Column
  declare name: string;

  @Column
  declare type: string;

  @Column
  declare quantity: number
  
  @Column
  declare pricePerUnit: number

  @Column
  declare hasImage: boolean
}
