import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

export default function ProductList() {
  const products = useSelector(state => state.products)
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ) 
}