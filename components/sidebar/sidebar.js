// import { Button, Modal } from "bootstrap";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authAction from "src/redux/actions/auth";
import styles from "../sidebar/sidebar.module.scss";

function Sidebar() {
  const [selectDashboard, setDashboard] = useState(true);
  const [selectTransfer, setTransfer] = useState(false);
  const [selectTopUp, setTopUp] = useState(false);
  const [selectProfile, setProfile] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const errorMsg = useSelector((state) => state.auth.logoutMsg);
  const [show, setShow] = useState(false);

  const logoutHandler = () => {
    dispatch(
      authAction.logoutThunk(() => {
        toast.success(`${errorMsg}`);
        router.push("/login");
      })
    );
  };

  useEffect(() => {
    if (
      router.pathname.includes("transfer") ||
      router.pathname.includes("ammount") ||
      router.pathname.includes("confirmation")
    )
      return setTransfer(true);
    if (router.pathname.includes("dashboard")) return setDashboard(true);
    if (router.pathname.includes("profile")) return setProfile(true);
  }, []);

  const dashboardHandler = (e) => {
    e.preventDefault();
    setDashboard(true);
    setTransfer(false);
    setTopUp(false);
    setProfile(false);
    router.push("/dashboard");
  };
  const transferHandler = (e) => {
    e.preventDefault();
    setDashboard(false);
    setTransfer(true);
    setTopUp(false);
    setProfile(false);
    router.push("/transfer/:username");
  };
  const topupHandler = (e) => {
    e.preventDefault();
    setDashboard(false);
    setTransfer(false);
    setTopUp(true);
    setProfile(false);
  };
  const profileHandler = (e) => {
    e.preventDefault();
    setDashboard(false);
    setTransfer(false);
    setTopUp(false);
    setProfile(true);
    router.push("/profile");
  };

  const toggleHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className={`${styles["toggle"]} ${styles["close-toggle"]}`}
        onClick={toggleHandler}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      {show && (
        <>
          <div className={styles["bg-modal"]}></div>
          <div className={styles["toggle-list"]}>
            <div
              className={`${styles.dashboard} ${
                selectDashboard ? styles.on : undefined
              }`}
              onClick={dashboardHandler}
            >
              {selectDashboard && <div className={styles.rectangle}></div>}
              <i
                className={`bi bi-grid ${styles.icon} ${
                  selectDashboard ? styles.on : styles.off
                }`}
              ></i>
              <p className={`${styles.textDasboard}${styles.close}`}>
                Dashboard
              </p>
            </div>
            <div
              className={`${styles.dashboard} ${
                selectTransfer ? styles.on : undefined
              }`}
              onClick={transferHandler}
            >
              {selectTransfer && <div className={styles.rectangle}></div>}
              <i
                className={`fa-solid fa-arrow-up ${styles.icon} ${
                  selectTransfer ? styles.on : styles.off
                }`}
              ></i>
              <p
                className={`${styles.textDasboard} onClick={() => {
                
              }} ${styles.close}`}
              >
                Transfer
              </p>
            </div>
            <div
              className={`${styles.dashboard} ${
                selectTopUp ? styles.on : undefined
              }`}
              onClick={topupHandler}
            >
              {selectTopUp && <div className={styles.rectangle}></div>}
              <i
                className={`fa-solid fa-plus ${styles.icon} ${
                  selectTopUp ? styles.on : styles.off
                }`}
              ></i>
              <p className={`${styles.textDasboard} ${styles.close}`}>Top Up</p>
            </div>
            <div
              className={`${styles.dashboard} ${
                selectProfile ? styles.on : undefined
              }`}
              onClick={profileHandler}
            >
              {selectProfile && <div className={styles.rectangle}></div>}
              <i
                className={`fa-regular fa-user ${styles.icon} ${
                  selectProfile ? styles.on : styles.off
                }`}
              ></i>
              <p className={`${styles.textDasboard} ${styles.close}`}>
                Profile
              </p>
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p className={styles["close"]}>Logout</p>
            </div>
          </div>
        </>
      )}
      <div className={styles["container"]}>
        <div
          className={`${styles.dashboard} ${
            selectDashboard ? styles.on : undefined
          }`}
          onClick={dashboardHandler}
        >
          {selectDashboard && <div className={styles.rectangle}></div>}
          <i
            className={`bi bi-grid ${styles.icon} ${
              selectDashboard ? styles.on : styles.off
            }`}
          ></i>
          <p className={`${styles.textDasboard} ${styles.close}`}>Dashboard</p>
        </div>
        <div
          className={`${styles.dashboard} ${
            selectTransfer ? styles.on : undefined
          }`}
          onClick={transferHandler}
        >
          {selectTransfer && <div className={styles.rectangle}></div>}
          <i
            className={`fa-solid fa-arrow-up ${styles.icon} ${
              selectTransfer ? styles.on : styles.off
            }`}
          ></i>
          <p className={`${styles.textDasboard} ${styles.close}`}>Transfer</p>
        </div>
        <div
          className={`${styles.dashboard} ${
            selectTopUp ? styles.on : undefined
          }`}
          onClick={topupHandler}
        >
          {selectTopUp && <div className={styles.rectangle}></div>}
          <i
            className={`fa-solid fa-plus ${styles.icon} ${
              selectTopUp ? styles.on : styles.off
            }`}
          ></i>
          <p className={`${styles.textDasboard} ${styles.close}`}>Top Up</p>
        </div>
        <div
          className={`${styles.dashboard} ${
            selectProfile ? styles.on : undefined
          }`}
          onClick={profileHandler}
        >
          {selectProfile && <div className={styles.rectangle}></div>}
          <i
            className={`fa-regular fa-user ${styles.icon} ${
              selectProfile ? styles.on : styles.off
            }`}
          ></i>
          <p className={`${styles.textDasboard} ${styles.close}`}>Profile</p>
        </div>
        <div className={styles.logout} onClick={logoutHandler}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p className={styles["close"]}>Logout</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;