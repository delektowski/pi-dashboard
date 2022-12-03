import React from 'react';
import styles from "./Spinner.module.css";
import {Spin} from "antd";

const SpinnerCentered = () => {
    return (
        <div className={styles.spinnerContainer}>
            <Spin />
        </div>
    );
};

export default SpinnerCentered;
