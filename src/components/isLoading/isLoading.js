import React from "react";
import styles from "../../components/isLoading/isLoading.module.scss";

function IsLoading() {
  return (
    <>
      <div className={` ${styles["lds-ring"]}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default IsLoading;
