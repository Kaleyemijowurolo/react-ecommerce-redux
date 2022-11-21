import { createSlice } from "@reduxjs/toolkit";
const products = [
  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },

  {
    buttonText: "",
    imgUrl: "/image2.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },

  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },

  {
    buttonText: "",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },

  {
    buttonText: "Special Offer",
    imgUrl: "/image1.svg",
    preRent: "",
    rent: "Rent for AED 139/month",
    productName: "Apple iPhone 13 Pro Max ",
  },
  {
    buttonText: "",
    imgUrl: "/image3.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139 / month",
    productName: "Microsoft Xbox Series S",
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
  {
    buttonText: "Sale",
    imgUrl: "/image2.svg",
    preRent: "AED 339 / month",
    rent: "Rent for AED 139/month",
    productName: 'MacBook Pro 14" Laptop',
  },
];
const initialState = {
  products: products,
  minPrice: null,
  maxPrice: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      //   console.log(action.payload);
      state.products = action.payload.products;
    },
    GET_PRICE_RANGE(state, action) {
      const { products } = action.payload;
      const array = [];
      products.map((product) => {
        const price = product.price;
        return array.push(price);
      });
      const max = Math.max(...array);
      const min = Math.min(...array);

      state.minPrice = min;
      state.maxPrice = max;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectMinPrice = (state) => state.product.minPrice;
export const selectMaxPrice = (state) => state.product.maxPrice;

export default productSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   minPrice: null,
//   maxPrice: null,
// };

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     STORE_PRODUCTS(state, action) {
//       //   console.log(action.payload);
//       state.products = action.payload.products;
//     },
//     GET_PRICE_RANGE(state, action) {
//       const { products } = action.payload;
//       const array = [];
//       products.map((product) => {
//         const price = product.price;
//         return array.push(price);
//       });
//       const max = Math.max(...array);
//       const min = Math.min(...array);

//       state.minPrice = min;
//       state.maxPrice = max;
//     },
//   },
// });

// export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;

// export const selectProducts = (state) => state.product.products;
// export const selectMinPrice = (state) => state.product.minPrice;
// export const selectMaxPrice = (state) => state.product.maxPrice;

// export default productSlice.reducer;
