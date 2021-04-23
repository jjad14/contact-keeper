import React, { useState, useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Register = () => {
    const alertContext = useContext(AlertContext);

    const {setAlert }= alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;
    
    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        }
        else if(password !== password2) {
            setAlert('Passwords must match', 'danger');
        }
        else {
            console.log('Register Submitted');
        }

    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label 
                        htmlFor="name">
                            Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={onChangeHandler}
                        required
                        autoComplete="name"/>
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="email">
                            Email Address
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChangeHandler}
                        required
                        autoComplete="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChangeHandler}
                        required
                        minLength="6"
                        autoComplete="new-password"/>
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="password2">
                            Confirm Password
                    </label>
                    <input 
                        type="password" 
                        name="password2" 
                        value={password2} 
                        onChange={onChangeHandler}
                        required
                        minLength="6"
                        autoComplete="new-password"/>
                </div>
                <input 
                    type="submit" 
                    value="Register"
                    className="btn btn-primary btn-block"/>
            </form>
        </div>
    );
};

export default Register;
