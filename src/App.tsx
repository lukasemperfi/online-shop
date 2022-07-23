import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { useAppDispatch } from './hooks/redux';
import { AppRouter } from './navigation/AppRouter'
import { userStateChanged } from './store/userSlice';

export const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const unsubscribe =	onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid
				dispatch(userStateChanged(user))

			} else {
				dispatch(userStateChanged(null))
			}
		});

		return () => unsubscribe();

	}, [])

	return (
		<AppRouter />
	)
}


