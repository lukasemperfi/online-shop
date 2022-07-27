import { UserInfo } from "../firebase/models/UserInfo";

// export const checkUserIsAdmin = (currentUser?: UserInfo | null) => {
//     if (!currentUser || !Array.isArray(currentUser.userRoles)) {
//       console.log('first if func');
      
//       return false
//     };
//     const { userRoles } = currentUser;
//     if (userRoles.includes('admin')) {
//       console.log('userRoles include func');
//       return true
//     };
//     console.log('return false func');
//     return false;
// }

export const checkUserIsAdmin = (currentUser?: UserInfo | null) => {
// console.log(currentUser);

  if (currentUser) {
    return  currentUser.roles.includes('admin')
  }
  
}

