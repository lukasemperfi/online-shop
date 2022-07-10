import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { AppRouter } from './navigation/AppRouter'

export const App = () => {

    // useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 		  const uid = user.uid;
	// 		  console.log('User loggin');
			  
	// 		  // ...
	// 		} else {
	// 			console.log('User is signed out');
				
	// 		  // User is signed out
	// 		  // ...
	// 		}
	// 	  });
	// }, [])

    return (
        <AppRouter />
    )
}


