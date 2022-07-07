import { AdminRoutes, CartRoutes, MainRoutes, PageNotFoundRoutes, ProductsRoutes } from "./routeNames";
import { MainLayout } from '../components/MainLayout/MainLayout';
import { AdminPage } from '../pages/AdminPage';
import { CartPage } from '../pages/CartPage';
import { PageNotFound } from '../pages/PageNotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { ProductsPage } from '../pages/ProductsPage';
import { HomePage } from "../pages/HomePage";

const productsRouteGroup = [
    { path: ProductsRoutes.ProductsPage, element: <ProductsPage /> },
    { path: ProductsRoutes.ProductDetails, element: <ProductDetails /> },
];

const adminRouteGroup = [
    { path: AdminRoutes.AdminPage, element: <AdminPage /> },
];

const cartRouteGroup = [
    { path: CartRoutes.Cart, element: <CartPage /> },
];

export const errorRouteGroup = [
    { path: PageNotFoundRoutes.PageNotFound, element: <PageNotFound /> },
];

export const homeRoutes = {
    index: true,
    element: <HomePage />
}

export const mainRoutes = {
    path: MainRoutes.Main,
    element: <MainLayout />,
    children: [
        ...productsRouteGroup,
        ...adminRouteGroup,
        ...cartRouteGroup,
    ],
};