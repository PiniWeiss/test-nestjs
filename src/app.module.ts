import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcurementModule } from './procurement/procurement.module';

@Module({
  imports: [ProcurementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
