import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
      <div className="w-24 h-24 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover rounded w-full h-full"
          onError={e => { e.target.src = '/assets/placeholder.png' }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <span className="font-bold mb-3 text-habeshaRed">{product.price} ETB</span>
      <button
        className="bg-habeshaBlue text-white px-3 py-1 rounded hover:bg-habeshaRed transition"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  )
}