import { FC, useEffect, useState } from "react";

// contexts
import { useUserContext } from "../contexts";

// utils
import { EFormTypes } from "../utils";

export const AuthCard: FC = (): JSX.Element => {
    const { error, formType, setError, setFormType, loginUser, registerUser } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setEmail('');
        setPassword('');
        setName('');
        setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formType]);

    console.log('~> ', error); //REMOVE

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    {error && <p className="error-message">{error}</p>}
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <span>Log In </span>
                                <span>Sign Up</span>
                            </h6>
                            <input
                                className="checkbox"
                                type="checkbox"
                                id="reg-log"
                                name="reg-log"
                                checked={formType === EFormTypes.REGISTER}
                                onChange={() => setFormType(formType === EFormTypes.REGISTER ? EFormTypes.LOGIN : EFormTypes.REGISTER)}
                            />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">
                                                    Log In
                                                </h4>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-style"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input
                                                        type="password"
                                                        className="form-style"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btn mt-5" onClick={() => loginUser({email, password})}>
                                                    Login
                                                </button>
                                                {/* <p className="mb-0 mt-4 text-center">
                                                    <a
                                                        href="https://www.web-leb.com/code"
                                                        className="link"
                                                    >
                                                        Forgot your
                                                        password?
                                                    </a>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-3 pb-3">
                                                    Sign Up
                                                </h4>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-style"
                                                        placeholder="Full Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input
                                                        type="email"
                                                        className="form-style"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input
                                                        type="password"
                                                        className="form-style"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btn mt-4" onClick={() => registerUser({name, email, password})}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
