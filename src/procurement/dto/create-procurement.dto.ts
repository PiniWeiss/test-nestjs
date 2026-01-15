import { IsString, IsNumber} from 'class-validator';
export class CreateItemDto {


  @IsNumber()
  id: number

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  quantity: number

  @IsNumber()
  pricePerUnit: number


  hasImage: boolean

}
