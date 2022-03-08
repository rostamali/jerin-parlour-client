import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import './Login.css';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { handleSigninUser, setNewUser, setAuthError, setLoading } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectUri = location.state?.from || '/';

    const onSubmit = data => {
        handleSigninUser(data.email, data.password)
        .then((userCredential) => { 
            const user = userCredential.user;
            if(user.email){
                setNewUser(user);
                setAuthError('');
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(redirectUri);
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(errorCode);
        }).finally(()=>setLoading(false));
    };

    return (
        <>
            <Header></Header>
            <div id="login">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Login With</h2>
                    </div>
                    <div className="form__wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input__field' required type="email" {...register("email")} placeholder="Email Address" />
                            <input className='input__field' required minLength={6} type="password" {...register("password")} placeholder="Password" />
                            <input type="submit" className='brand__btn submit__btn' value="Login" />
                        </form>
                    </div> 
                    <div className="form__footer text-center">
                        <p className="form__text">Don't have an account? <a href="/register" className="link__text">Create an account</a></p>  
                    </div>   
                </div>    
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;