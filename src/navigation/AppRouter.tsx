import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { AdminPage } from '../pages/AdminPage';
import { PageNotFound } from '../pages/PageNotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { ProductsPage } from '../pages/ProductsPage';
import { PublicRoutes } from './routeNames';


export const AppRouter = () => {

	const productsRoutes = [
		{ path: 'products', element: <ProductsPage /> },
		{ path: 'products/:id', element: <ProductDetails /> },
	];

	const privateAdminRoutes = [
		{ path: 'admin', element: <AdminPage /> },
	];

	const mainRoutes = {
		path: '/',
		element: <MainLayout />,
		children: [
			...productsRoutes,
			...privateAdminRoutes,
		],
	};

	const routes = useRoutes([mainRoutes])
	return <>{routes}</>

	// return (
	// 	<Routes>
	// 		<Route path={PublicRoutes.MainLayout} element={<MainLayout />}>
	// 			<Route path='products' element={<ProductsPage />} />
	// 			<Route path='products/:id' element={<ProductDetails />} />
	// 			<Route path='admin' element={<AdminPage />} />
	// 		</Route>
	// 		<Route path='*' element={<PageNotFound />} />
	// 	</Routes>
	// )

}