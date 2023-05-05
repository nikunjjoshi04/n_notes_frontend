import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const HOST = "http://127.0.0.1:5000/api";
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        const response = await fetch(`${HOST}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("token", data.access_token);
            navigate("/");
        } else {
            alert(data.errors);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="my-5 py-5">
            <h1>Login</h1>
            <form className="my-3" onSubmit={handleClick}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={credentials.email}
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={credentials.password}
                        name="password"
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
