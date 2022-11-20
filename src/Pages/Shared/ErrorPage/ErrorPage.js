import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const {logout} = useContext(AuthContext);
    const handalLogOut = ()=> {
        logout()
        .then(()=> {})
        .catch(err => console.log(err))
    }
    return (
        <div className='text-center my-10'>
            <h3 className='text-3xl text-red-800'>Something wrong!!!!</h3>
            <p className='text-xl text-red-600'>{error.message} & {error.code}</p>
            <button onClick={handalLogOut} className='text-center btn btn-sm btn-primary'>Signout</button>
        </div>
    );
};

export default ErrorPage;