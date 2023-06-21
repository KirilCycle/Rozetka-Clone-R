import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router';
import HomePage from './pages/Home/HomePage';
import DevicePage from './pages/DevicePage/DevicePage';
import SelectedDevicesPage from './pages/SelectedDeviceCategory/SelectedDevicesCategory';

import Basket from './components/Basket/Basket';
import Menu from './components/Menu/Menu';
import { MenuContext, MobileSortActive } from './context';
import SearchPage from './pages/Seacrh/SearchPage';
import LeftMobileFilter from './components/LeftMobileFilter';
import BottomBanner from './components/BottomBanner';
import OrderPage from './pages/Checkout/components/OrderList';
import Checkout from './pages/Checkout/Checkout';
import { routes } from './router-manager/routes';
import Catalog from './components/Catalog/Catalog';
import TopNavbar from './components/Navbar/TopNavbar';


function App() {

   const [menuActive, setMenuActive] = React.useState<boolean>(false)

   const [active, setActive] = React.useState<boolean>(false)

   const [catalogVisible, setCatalogVisible] = React.useState<boolean>(false)

   function handleMenuState() {
      setActive(active => !active)
   }

   function menuHandle() {
      setMenuActive(prev => !prev)
   }

   return (
      <BrowserRouter>
         <div className='app-wrapp'>
            <MobileSortActive.Provider value={{ active, handleMenuState }} >
               <MenuContext.Provider value={{ active: menuActive, menuHandle, catalogVisible, setCatalogVisible }}>
                  <Catalog />
                  <Menu />
                  <TopNavbar />
               </MenuContext.Provider>
               <Basket />
               <LeftMobileFilter />
               <Routes>
                  {routes.map((route) => <Route key={route.path} element={route.element} path={route.path}></Route>)}
               </Routes>
            </MobileSortActive.Provider>
         </div>
         <BottomBanner />
      </BrowserRouter>
   );
}

export default App;
