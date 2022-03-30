import { Product } from "./products.models";
import { User } from "./user.model";
export interface Shop{
    purcharseId:string;
    funko:Product;
    user:Pick<User,'uid'|'name'|'roles'>;
    date?:Timestamp;
}
export interface Timestamp{
    seconds:number;
    nanoseconds:number;
  }