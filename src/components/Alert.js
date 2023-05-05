import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
    const { alerts } = useContext(AlertContext);

    return (
        <>
            {alerts &&
                alerts.map((alert, index) => {
                    return (
                        <div key={index} className={`alert alert-${alert.type} alert-dismissible fade show my-2`} role="alert">
                            <strong>{alert.value}</strong> {alert.msg}
                        </div>
                    );
                })}
        </>
    );
};

export default Alert;
