import { selectUser } from '../store/userSlice/selectors';
import { useAppSelector } from './redux';

export const useAdminAuth = () => {
    const currentUser = useAppSelector(selectUser)

    if (currentUser) {
        return  currentUser.roles.includes('admin')
      }
}
