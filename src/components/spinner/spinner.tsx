import React from 'react';
import styles from "../monitoring/monitoringImg/Monitoring-img.module.css";
import {Spin} from "antd";

const SpinnerCentered = () => {
    return (
        <div className={styles.spinnerContainer}>
            <Spin />
        </div>
    );
};

export default SpinnerCentered;
