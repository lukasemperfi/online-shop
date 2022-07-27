import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AdminBar } from './components/AdminBar';
import { Loader } from './components/Loaders/Loader';
import { LoaderCenterFullScreen } from './components/Loaders/LoaderCenterFullScreen';
import { auth } from './firebase/firebase';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useAdminAuth } from './hooks/useAdminAuth';
import { AppRouter } from './navigation/AppRouter'
import { selectUser, selectUserState, userStateChanged } from './store/userSlice';



export const App = () => {
	const dispatch = useAppDispatch()

	const { isAuthChecked } = useAppSelector(selectUserState)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('islogged');

				dispatch(userStateChanged(user))

			} else {
				console.log('not logged');
				dispatch(userStateChanged(null))
			}
		});

		return () => unsubscribe();

	}, [])

	return (
		<>
			{isAuthChecked ? <AppRouter /> : <LoaderCenterFullScreen/>}
		</>

	)
}


