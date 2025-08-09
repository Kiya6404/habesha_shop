import React from 'react'
import { useSelector } from 'react-redux'

export default function CartTable() {
  const cart = useSelector(state => state.cart)
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-habeshaGold text-center">Cart</h2>
      <table className="w-full border border-gray-300 rounded">
        <thead>
          <tr className="bg-habeshaGold/30">
            <th className="py-2 px-3 text-left">#</th>
            <th className="py-2 px-3 text-left">Title</th>
            <th className="py-2 px-3 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 && (
            <tr>
              <td colSpan="3" className="py-4 text-center text-gray-500">Cart is empty</td>
            </tr>
          )}
          {cart.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-3">{idx + 1}</td>
              <td className="py-2 px-3">{item.title}</td>
              <td className="py-2 px-3">{item.price} ETB</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t font-bold">
            <td colSpan="2" className="py-2 px-3 text-right">Total Price</td>
            <td className="py-2 px-3">{total} Etb</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}