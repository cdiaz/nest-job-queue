import { Injectable } from '@nestjs/common';
import { BtcPrice } from './btcprice.model';
import { HttpService } from '@nestjs/common/http';

@Injectable()
export class BtcPriceService {

  constructor(
    private readonly httpService: HttpService
  ) { }

  public async getAll() {
    return await BtcPrice.find<BtcPrice>()
    .sort("date", "asc")
    .all();
}
  
  public fetch(currency) {
    return new Promise((resolve, reject) => {
      this.httpService.get('http://api.coindesk.com/v1/bpi/currentprice.json')
      .toPromise()
      .then(response => {
        new BtcPrice({date: response.data.time.updatedISO, value: response.data.bpi[currency].rate}).save()
        .then(() => resolve((response.data.bpi[currency].rate)))
        .catch(err => reject(err))
      })
      .catch(error => {
        reject(error)
      })
    });
  }
}