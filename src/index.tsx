import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import './index.css';


const container = document.getElementById('root')!;
const root = createRoot(container);



if (localStorage.getItem('basket') == null || localStorage.getItem('basket') == ' ' || localStorage.getItem('basket') == '') { 
  localStorage.setItem('basket', '[]') 
}
if (localStorage.getItem('recentlyViewed') == null || localStorage.getItem('recentlyViewed') == ' ' || localStorage.getItem('recentlyViewed') == '') { 
  localStorage.setItem('recentlyViewed', '[]') 
}


const store = setupStore();
//http://localhost:3001/products?type=phone&brand=apple&brand=samsung&brand=redmi
//http://localhost:3001/products?type=phone&brand=apple&brand=samsung&brand=redmi&_page=1&_limit=0 pagination +  type + couple brand
//http://localhost:3001/products?name_like=iphone search by name 
//http://localhost:3001/products?_sort=rating&_order=desc filter by rating
//http://localhost:3001/products?type=phone&brand=samsung&%20_sort=rating&_order=desc&%20_page=1&_limit=20 type + brand + sort by rating + pagination 

root.render(
  <Provider store={store}>

    <App />

  </Provider>
);

