import React, {createContext} from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: Product[],
  shipping?: number;
}

const CartContext = createContext<Cart>({
  products: [],
  shipping: 0
})

export default CartContext
