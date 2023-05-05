import React, { useContext, useState } from "react";
import SignUpContext from "../context/signup/SignUpContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const context = useContext(SignUpContext);
    const { signUpUser } = context;

    const [signUpForm, setSignup] = useState({ name: "", email: "", password: "", confirmPassword: "" });

    const handleClick = async (e) => {
        e.preventDefault();
        const isSignup = await signUpUser(signUpForm);
        if (isSignup) {
            navigate("/login");
        }
    };

    const onChange = (e) => {
        setSignup({ ...signUpForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="my-5 py-5">
                <h1>Signup</h1>
                <form className="my-3" onSubmit={handleClick}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={signUpForm.name}
                                name="name"
                                aria-describedby="nameHelp"
                                onChange={onChange}
                            />
                            <small id="nameHelp" className="form-text text-muted">
                                We'll never share your name with anyone else.
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={signUpForm.email}
                                name="email"
                                aria-describedby="emailHelp"
                                onChange={onChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={signUpForm.password}
                                name="password"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                value={signUpForm.password}
                                name="confirmPassword"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Signup;
