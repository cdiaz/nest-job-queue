import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common/http';
import { BtcPriceService } from './btcprice.service';
import { BtcPriceController } from './btcprice.controller';

@Module({
  imports: [HttpModule],
  controllers: [BtcPriceController],
  components: [BtcPriceService],
})
export class BtcPriceModule {}