import { Routes, Route, useRoutes, } from 'react-router-dom';
import { errorRouteGroup, homeRoutes, mainRoutes } from './routes';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { AdminPage } from '../pages/AdminPage';
import { CartPage } from '../pages/CartPage';
import { PageNotFound } from '../pages/PageNotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { ProductsPage } from '../pages/ProductsPage';
import { HomePage } from '../pages/HomePage';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { TestPage } from '../pages/TestPage';

export const AppRouter = () => {

	// const routes = useRoutes([
	// 	homeRoutes, 
	// 	mainRoutes, 
	// 	...errorRouteGroup
	// ])

	// return <>{routes}</>


	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				{/* <Route path='products' element={<ProductsPage />} /> */}
				<Route path='products/:gender' element={<ProductsPage />}/>
				<Route path='products/:gender/:id' element={<ProductDetails />} />
				<Route path='cart' element={<CartPage />} />
				<Route path='admin' element={<AdminPage />} />
				{/* <Route path='/:gender' element={<TestPage />}>
					<Route path=':category' element={<TestPage />} />
				</Route> */}
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>)

}