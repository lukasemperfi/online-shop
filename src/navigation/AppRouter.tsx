import { Routes, Route, useLocation, } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout/MainLayout';
import { AdminPage } from '../pages/AdminPage/AdminPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { Path } from './routeNames';
import { LoginFormModal } from '../components/LoginFormModal/LoginFormModal';
import { BackgroundLocation } from './BackgroundLocation';
import { RegistrationFormModal } from '../components/RegistrationFormModal/RegistrationFormModal';
import { AuthWrapper } from '../components/AuthWrapper';

export const AppRouter = () => {
	const location = useLocation()

	const state = location.state as BackgroundLocation;

	return (
		<>
			<Routes location={state?.backgroundLocation || location}>
				<Route index element={<HomePage />} />
				<Route path={Path.Home} element={<MainLayout />}>
					<Route path={Path.GenderCategory} element={<ProductsPage />} />
					<Route path={Path.GenderCategoryDetails} element={<ProductDetails />} />
					<Route path={Path.ProductType} element={<ProductsPage />} />
					<Route path={Path.ProductTypeDetails} element={<ProductDetails />} />
					<Route path={Path.Cart} element={<CartPage />} />
					<Route path={Path.Admin} element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
					<Route path={Path.Login} element={<AuthWrapper><LoginFormModal /></AuthWrapper>} />
					<Route path={Path.Registration} element={<AuthWrapper><RegistrationFormModal /></AuthWrapper>} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>

			{state?.backgroundLocation && (
				<Routes>
					<Route path={Path.Login} element={<AuthWrapper><LoginFormModal /></AuthWrapper>} />
					<Route path={Path.Registration} element={<AuthWrapper><RegistrationFormModal /></AuthWrapper>} />
				</Routes>
			)}
		</>
	)
}