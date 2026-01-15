import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-procurement.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
