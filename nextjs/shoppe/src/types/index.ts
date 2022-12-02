export interface IProduct {
  id: number
  imageUrl: string
  name: string
  price: number
  status?: string
}

export interface IProductDetail extends IProduct {
  quantity?: number
  introduction: string
  description?: string
}

export interface ICart {
  id: number
  products: IProductDetail[]
}
