import { useContext } from "react";
import SignUpContext from "./SignUpContext";
import AlertContext from "../alert/AlertContext";

const SignUpState = (props) => {
    const HOST = "http://127.0.0.1:5000/api";
    const { showAlert } = useContext(AlertContext);

    // Signup user
    const signUpUser = async ({ name, email, password }) => {
        const data = { name, email, password };

        const response = await fetch(`${HOST}/auth/create-users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200) {
            var user = await response.json();
            console.log(user);
            showAlert([{ type: "success", msg: "Signup successfully..." }]);
            return true;
        } else {
            const errors = await response.json();
            const alerts = errors.errors.map((error) => {
                return { type: "danger", msg: error.msg, value: error.value || error.path };
            });
            showAlert(alerts);
        }
    };

    return (
        <SignUpContext.Provider
            value={{
                signUpUser,
            }}
        >
            {props.children}
        </SignUpContext.Provider>
    );
};

export default SignUpState;
