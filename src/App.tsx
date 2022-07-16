import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { useAppDispatch } from './hooks/redux';
import { AppRouter } from './navigation/AppRouter'
import { userStateChanged } from './store/userSlice';

export const App = () => {
	const dispatch = useAppDispatch()

	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {

	// 		// const userInfo = {
	// 		// 	uid: user?.uid,
	// 		// 	email: user?.email,
	// 		// 	userRoles: ['user']
	// 		// }

	// 		if (user) {
	// 			const uid = user.uid
	// 			dispatch(userStateChanged(uid))
	// 			// console.log('User loggin');

	// 		} else {
	// 			dispatch(userStateChanged(null))
	// 			// console.log('User is signed out');
	// 		}
	// 	});

	// }, [])

	return (
		<AppRouter />
	)
}


