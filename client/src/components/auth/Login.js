import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;
    
    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log('Login Submitted');
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
                        onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChangeHandler}/>
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
