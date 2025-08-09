import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productsSlice'

export default function AddProductModal({ open, onClose }) {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ title: '', description: '', price: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title || !form.description || !form.price) return
    dispatch(addProduct({ ...form, price: Number(form.price) }))
    setForm({ title: '', description: '', price: '' })
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-habeshaGold">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Price (ETB)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              min="1"
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-habeshaGreen text-white hover:bg-habeshaRed"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}