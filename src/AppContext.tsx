import React, {
  useContext,
  useReducer
} from 'react'
import CartContext from './CartContext'

interface Cart {
  products: string[],
  shipping?: number;
}

type CartAction =  {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {

  const { products } = useContext(CartContext)
  const cart = useReducer(
    (state: Cart, action: CartAction) => {
      switch(action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Novo Produto']
          }
        default:
          return state
      }
    }, {
      products: [],
      shipping: 0
    }
  )

  return (
    <div>
      Context
    </div>
  )
}

export default AppContext
