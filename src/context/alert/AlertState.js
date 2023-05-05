import AlertContext from "./AlertContext";
import { useState } from "react";

const AlertState = (props) => {
    const [alerts, setAlert] = useState([]);

    const showAlert = (alertsList) => {
        setAlert(alertsList);
        setTimeout(() => {
            setAlert([]);
        }, 5000);
    };

    return (
        <AlertContext.Provider
            value={{
                alerts,
                showAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
