import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate=useNavigate()


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required placeholder='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required placeholder='password' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New To Ema john? <Link to="/signup">signUp</Link></small></p>
        </div>
    );
};

export default Login;