export interface Products {
  imageCover:string,
  title:string,
  price:number,
  category: Category,
  ratingsAverage:number,
  id:string,
  description?:string,
  images?:[]
}
interface Category{
  name: string;
}
