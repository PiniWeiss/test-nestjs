import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './procurement.service';
import { CreateItemDto } from './dto/create-procurement.dto';

@Controller()
export class ProcurementController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post("/transactions/purchase")
  by(@Body() createItemDto: CreateItemDto) {
    
  }
  @Post("/images/check/:itemId")
  checkImage(){
    
  }
  
  
}
