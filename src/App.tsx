import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { LoaderCenterFullScreen } from './components/UI/Loaders/LoaderCenterFullScreen/LoaderCenterFullScreen';
import { auth } from './firebase/firebase';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { AppRouter } from './navigation/AppRouter';
import { selectUserState } from './store/userSlice/selectors';
import { userStateChanged } from './store/userSlice/userSlice';

export const App = () => {
	const dispatch = useAppDispatch()
	const { isAuthChecked } = useAppSelector(selectUserState)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(userStateChanged(user))

			} else {
				dispatch(userStateChanged(null))
			}
		});

		return () => unsubscribe();

	}, [])

	return (
		<>
			{isAuthChecked ? <AppRouter /> : <LoaderCenterFullScreen />}
		</>
	)
}
