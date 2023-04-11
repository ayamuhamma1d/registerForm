export interface Cart {
  numOfCartItems:number,
  data: data

}
interface data
{
  totalCartPrice:number,
  products: products[]
}

interface products{
  count:number,
  price:number,
  product: productDetails
}

interface productDetails{
  imageCover:string,
  id: string,
  title: string,
}
