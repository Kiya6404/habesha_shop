import React, { useState } from 'react'
import ProductList from './components/ProductList'
import CartTable from './components/CartTable'
import AddProductModal from './components/AddProductModal'

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen flex flex-col px-4 pb-10 bg-gradient-to-b from-habeshaGold/10 to-white">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-habeshaRed font-habesha tracking-tight">Habesha Shop</h1>
        <p className="text-gray-600 mt-2">Your favorite Habesha products in one place</p>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-habeshaGold">Products</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-habeshaGreen text-white px-4 py-2 rounded shadow hover:bg-habeshaRed transition"
            >
              + Add Product
            </button>
          </div>
          <ProductList />
        </div>
        <div className="w-full max-w-3xl mt-12">
          <CartTable />
        </div>
      </main>
      <AddProductModal open={showModal} onClose={() => setShowModal(false)} />
      
    
    </div>
  )
}
