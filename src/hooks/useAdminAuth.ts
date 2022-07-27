import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { selectUser } from '../store/userSlice'
import { checkUserIsAdmin } from '../utils/checkUserIsAdmin'
import { useAppSelector } from './redux'

export const useAdminAuth = () => {
    const currentUser = useAppSelector(selectUser)

    if (currentUser) {
        return  currentUser.roles.includes('admin')
      }
}
