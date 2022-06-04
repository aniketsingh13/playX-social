import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useSelector((state) => state.auth)
  return (
    user ? (children): ( <Navigate to="/login" state={{ from: location?.pathname }} replace />)
  )
}

export default RequireAuth