import { NestFactory } from '@nestjs/core';
import { BtcPriceModule } from '../../btcprice/btcprice.module';
import { BtcPriceService } from '../../btcprice/btcprice.service';

const BtcPriceProcessor = async (job) => {
  
  const context = await NestFactory.createApplicationContext(BtcPriceModule);
  const btcPriceService = context.get(BtcPriceService);

  return await btcPriceService.fetch(job.data.currency)
    .then(data=> Promise.resolve(data))
    .catch(err=> Promise.reject(err))
}

export { BtcPriceProcessor }