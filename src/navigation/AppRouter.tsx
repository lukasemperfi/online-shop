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
			<Route index element={<HomePage />} />
			<Route path='/' element={<MainLayout />}>		
				{/* <Route index element={<TestPage />} /> */}
				<Route path=':gender' element={<ProductsPage />}/>
				<Route path=':gender/:id' element={<ProductDetails />} />
				<Route path=':gender/catalog/:productType' element={<ProductsPage />}/>
				<Route path='cart' element={<CartPage />} />
				<Route path='admin' element={<AdminPage />} />
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>)

}