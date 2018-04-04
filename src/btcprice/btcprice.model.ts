import { Field, Model } from "fusedb";

export class BtcPrice extends Model<BtcPrice> {

  @Field()
  public date: Date;

  @Field()
  public value: string;

}