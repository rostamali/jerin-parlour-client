import React from 'react';
import { updateProfile, getAuth } from "firebase/auth";
import { useForm } from 'react-hook-form';
import './Register.css';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import useFirebase from '../../hooks/useFirebase';
import Swal from 'sweetalert2';

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const { handleRegisterUser, setNewUser, setAuthError, setLoading } = useFirebase();

    const onSubmit = data => {
        const auth = getAuth();
        handleRegisterUser(data.fullName, data.email, data.password)
        .then((userCredential) => {

            updateProfile(auth.currentUser, {
                displayName: data.fullName
            });
            const user = userCredential.user;
            setNewUser(user);
            setAuthError('');
            if(user.email){
                
                let updateUser = {};
                updateUser.name = data.fullName;
                updateUser.email = data.email;
                updateUser.status = 'subscriber';

                Swal.fire({
                    icon: 'success',
                    title: 'Your account has been created',
                    showConfirmButton: false,
                    timer: 1500
                });
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateUser)
                })
                .then(res => res.json())
                .then(data => console.log(data));

                reset();
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
            <div id="register">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Create an account</h2>
                    </div>
                    <div className="form__wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input__field' required type="text" {...register("fullName")} placeholder="Full Name" />
                            <input className='input__field' required type="email" {...register("email")} placeholder="Email Address" />
                            <input className='input__field' required minLength={6} type="password" {...register("password")} placeholder="Password" />
                            <input type="submit" className='brand__btn submit__btn' value="Create an account" />
                        </form>
                    </div> 
                    <div className="form__footer text-center">
                        <p className="form__text">Already have an account? <a href="/login" className="link__text">Login</a></p>    
                    </div>   
                </div>    
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;