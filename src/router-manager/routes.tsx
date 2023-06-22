import Checkout from "../pages/Checkout/Checkout"
import DevicePage from "../pages/DevicePage/DevicePage"
import HomePage from "../pages/Home/HomePage"
import SearchPage from "../pages/Seacrh/SearchPage"
import SelectedCategoryPage from "../pages/SelectedDeviceCategory/SelectedDevicesCategory"
import TestPage from "../pages/TestPage/TestPage"

const HOME_ROUTE = '/'

const DEVICE_ROUTE = '/:deviceType/:id/'

const SELECTED_DEVICE_PAGE = ':id/'

const SEARCH_PAGE = '/search/:id/'

const CHECKOUT_PAGE = 'checkout'

const TEST_PAGE = 'test'

interface route {
    element: React.ReactNode;
    path: string
}

export const routes: route[] = [

    {
        path: HOME_ROUTE,
        element: <HomePage />
    },
    {
        path: TEST_PAGE,
        element: <TestPage/>
    },
    {
        path: SELECTED_DEVICE_PAGE,
        element: <SelectedCategoryPage />
    },
    {
        path: DEVICE_ROUTE,
        element: <DevicePage />
    },
    {
        path: SEARCH_PAGE,
        element: <SearchPage />
    },
    {
        path: CHECKOUT_PAGE,
        element: <Checkout />
    },


]