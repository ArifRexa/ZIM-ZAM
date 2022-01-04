import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children , ...rest}) => {
    const {user, admin, isLoading} = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }

    if(user.email && admin){
        return children
    }
    return <Navigate to="/login" state={{from: location}} />
    
};

export default AdminRoute;