import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
    const { login, error, clearErrors, isAuthenticated } = useContext(AuthContext);
    const { setAlert } = useContext(AlertContext);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
    }, [isAuthenticated, props.history])

    useEffect(() => {
        if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error, clearErrors, setAlert]);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         props.history.push('/');
    //     }

    //     if (error === 'Invalid Credentials') {
    //         setAlert(error, 'danger');
    //         clearErrors();
    //     }
    //     // esling-disable-next-line
    // }, [error, isAuthenticated, props.history]);
    
    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        }
        else {
            login({
                email,
                password
            });
        }

    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label 
                        htmlFor="email">
                            Email Address
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChangeHandler}autoComplete="email"
                        required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChangeHandler}
                        autoComplete="new-password"
                        required/>
                </div>
                <input 
                    type="submit" 
                    value="Login"
                    className="btn btn-primary btn-block"/>
            </form>
        </div>
    );
};

export default Login;
