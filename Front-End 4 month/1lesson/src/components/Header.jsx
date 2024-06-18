import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/img/pizza-logo.svg';
import Modal from './Modal';

const Header = () => {
    const [modal, setModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const isEmailValid = (value) => {
        return EMAIL_REGEXP.test(value);
    };

    useEffect(() => {
        const mail = emailRef.current;
        const onInput = () => {
            if (isEmailValid(mail.value)) {
                mail.style.border = '1px solid green';
            } else {
                mail.style.border = '1px solid red';
            }
        };

        if (mail) {
            mail.addEventListener('input', onInput);
        }

        return () => {
            if (mail) {
                mail.removeEventListener('input', onInput);
            }
        };
    }, [modal]);

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>Geeks Pizza 23 1f abdul basir</h1>
                        <p>самая вкусная пицца во вселенной</p>
                        <button onClick={() => setModal(true)}>Open</button>
                    </div>
                </div>

                <div className="header__cart">
                    <a href="/cart.html" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>3</span>
                    </a>
                </div>
            </div>
            <Modal open={modal} setOpen={setModal}>
                <div className="login-container">
                    <div><h2>Account Login</h2></div>
                    <br />
                    <input type="text" ref={emailRef} id="mail-login" className="login-input" placeholder="Email" />
                    <input type={showPassword ? 'text' : 'password'} ref={passwordRef} id="pass-login" className="login-input" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={toggleShowPassword} style={{ backgroundColor: showPassword ? 'green' : 'grey' }}>
                        {showPassword ? 'Hide Password' : 'Show Password'}
                    </button>
                    <p>Forgot Username / Password?</p>
                    <p>Create an account? Sign Up</p>
                </div>
            </Modal>
        </div>
    );
};

export default Header;
