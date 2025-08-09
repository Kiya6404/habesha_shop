import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: nanoid(),
    title: "Coffee",
    description: "Direct from Jimma. Fresh and aromatic Ethiopian coffee beans.",
    price: 1300,
    image: "/assets/coffee.png"
  },
  {
    id: nanoid(),
    title: "Doro Wot",
    description: "One full chicken with 12 boiled eggs and 10 enjera.",
    price: 2000,
    image: "/assets/doro-wot.png"
  },
  {
    id: nanoid(),
    title: "Tejj",
    description: "Pure honey wine, prepared with high quality.",
    price: 500,
    image: "/assets/tejj.png"
  },
  {
    id: nanoid(),
    title: "Habesha Dress",
    description: "Handmade with love and very talented hands. Size: S, M, L, XL.",
    price: 5000,
    image: "/assets/habesha-dress.png"
  }
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        ...action.payload,
        id: nanoid()
      })
    }
  }
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer