# Habesha Shop 🪔

A single-page shopping cart app with a Habesha (Ethiopian) theme, built using **React**, **Redux**, and **Tailwind CSS**.

## Features

- 🛍️ **Product Cards:** View products in a grid with details, price, and Add to Cart button.
- 🛒 **Cart Table:** Cart appears at the bottom with a list and running total.
- ➕ **Add Product Modal:** Add new products dynamically via a modal form (bonus feature).
- 🎨 **Habesha Theme:** Styled with Ethiopian-inspired colors and easy to customize.

## Initial Products

- **Coffee:** Direct from Jimma, 1300 ETB/kilo
- **Doro Wot:** One full chicken with 12 boiled eggs and 10 enjera, 2000 ETB
- **Tejj:** Pure honey wine, high quality, 500 ETB/litre
- **Habesha Dress:** Handmade, size S–XL, 5000 ETB

## Folder Structure

```
habesha-shop/
├── public/
│   └── favicon.ico            # Favicon goes here
├── src/
│   ├── assets/                # Product images here (e.g. coffee.png, doro-wot.png)
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── CartTable.jsx
│   │   └── AddProductModal.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── productsSlice.js
│   │   └── cartSlice.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
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

3. **Add product images:**  
   Place images in `src/assets/` (e.g. `coffee.png` for Coffee).  
   Update image paths in `src/redux/productsSlice.js` if needed.

4. **Favicon:**  
   Replace `public/favicon.ico` with your own icon for Habesha Shop.

## Customization

- To change the product list, edit `src/redux/productsSlice.js`.
- To change images, replace files in `src/assets/` and match file names in your code.
- To update theme colors, modify `tailwind.config.js` and `index.css`.

## Credits

Inspired by Ethiopian culture.  
Built with [React](https://react.dev/), [Redux](https://redux.js.org/), and [Tailwind CSS](https://tailwindcss.com/).

---

MIT License