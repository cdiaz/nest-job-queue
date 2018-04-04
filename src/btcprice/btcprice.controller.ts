import { Get, Controller } from '@nestjs/common';
import { BtcPriceService } from './btcprice.service';

@Controller('btcprice')
export class BtcPriceController {
  constructor(
    private readonly btcPriceService: BtcPriceService
  ) { }

  @Get()
  async root() {
    return await this.btcPriceService.getAll()
  }
}
