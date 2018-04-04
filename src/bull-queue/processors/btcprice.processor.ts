const BtcPriceProcessor = async (job) => {
  
  /*The typical cases for process functions include database operations and use of another components.
    What is the best way to call functions from the nest components from here?
    How do use Dependency Injector?
    ex: this.btcPriceService.fetch('USD');
  */

  console.log(job.data)
  return Promise.resolve('success');
}

export { BtcPriceProcessor }