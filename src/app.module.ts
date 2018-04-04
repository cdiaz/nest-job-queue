import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BullQueueModule } from './bull-queue/bull-queue.module';
import { BtcPriceModule } from './btcprice/btcprice.module';

@Module({
  imports: [
    DatabaseModule,
    BullQueueModule,
    BtcPriceModule
  ],
  controllers: []
})

export class AppModule {}