
# Habesha Shop 🪔

A single-page shopping cart app with a Habesha (Ethiopian) theme, built using **React**, **Redux**, and **Tailwind CSS**.

## Features

* 🛍️ **Product Cards:** View products in a grid with details, price, and Add to Cart button.
* 🛒 **Cart Table:** Cart appears at the bottom with a list and running total.
* ➕ **Add Product Modal:** Add new products dynamically via a modal form (images use default placeholders).
* 🎨 **Habesha Theme:** Styled with Ethiopian-inspired colors and easy to customize.

## Initial Products

* **Coffee:** Direct from Jimma, 1300 ETB/kilo
* **Doro Wot:** One full chicken with 12 boiled eggs and 10 enjera, 2000 ETB
* **Tejj:** Pure honey wine, high quality, 500 ETB/litre
* **Habesha Dress:** Handmade, size S–XL, 5000 ETB

## Project Structure

```
node_modules/
public/
src/
├── components/
│   ├── AddProductModal.jsx
│   ├── CartTable.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── redux/
│   ├── cartSlice.js
│   ├── productsSlice.js
│   └── store.js
├── App.jsx
├── index.css
└── main.jsx
index.html
package-lock.json
package.json
postcss.config.js
README.MD
tailwind.config.js
vite.config.mjs
```

## How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the app:**

   ```bash
   npm run dev
   ```

3. **Add Products:**
   Use the "Add Product" button in the app to dynamically add new products.
   Newly added products use a default placeholder image automatically.

4. **Favicon:**
   Replace `public/favicon.ico` with your own icon for Habesha Shop.

## Customization

* To change the initial product list, edit `src/redux/productsSlice.js`.
* To change images, replace files in `src/assets/` (if applicable) and ensure file names match those used in code.
* To update theme colors, modify `tailwind.config.js` and `index.css`.

## Credits

Inspired by Ethiopian culture.
Built with [React](https://react.dev/), [Redux](https://redux.js.org/), and [Tailwind CSS](https://tailwindcss.com/).


