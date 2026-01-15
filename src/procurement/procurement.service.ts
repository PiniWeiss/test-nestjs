import { Inject, Injectable } from '@nestjs/common';
import { Item } from './entities/procurement.entity';
import fs from "fs/promises";
import { CreateItemDto } from './dto/create-procurement.dto';
import { UpdateItemDto } from './dto/update-procurement.dto';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY')
    private itemModel: typeof Item,
  ) {}
  async findOne(id: number): Promise<Item | null> {
    const shift = this.itemModel.findOne({ where: { id: +id } });
    return shift;
  }

  async readBudget(){
    const data = await fs.readFile("./data/budget/txt");
    return 
  }

  async writeBudget(amount){

  }

  async readItems() {
    try {
      const data = await fs.readFile("./data/products.json");
  
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  
  async writeItems(items) {
    await fs.writeFile(
      "./data/products.json",
      JSON.stringify(items, null, ),
      "utf8"
    );
  }
  

  async byItem(createItemDto: CreateItemDto) {
    
    return
  }
}
