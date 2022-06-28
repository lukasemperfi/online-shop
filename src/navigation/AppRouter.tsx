import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { PageNotFound } from '../pages/PageNotFound';
import { ProductsPage } from '../pages/ProductsPage';
import { MainRoutes } from './routeNames';


export const AppRouter = () => {
	// const not = {
	// 	path: '*',
	// 	element: <PageNotFound />,
	// }
	// const mainRoutes = {
	// 	path: '/',
	// 	element: <MainLayout />,
	// 	children: [
	// 		{ path: '*', element: <Navigate to='/404' /> },
	// 		{ path: '404', element: <PageNotFound /> },
	// 	],
	// };

	//   const routing = useRoutes([mainRoutes]);
	// return routing	

	return (
		<Routes>
			<Route path={MainRoutes.MainLayout} element={<MainLayout />}>
				<Route path='/' element={<ProductsPage />} />
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	)

}