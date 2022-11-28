import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutApi } from "../../pages/api/utils";
import styles from "../../components/logout/logout.module.scss";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { setUser_id, setPin, setToken } from "../../redux/reducers/regSlice";
import "react-toastify/dist/ReactToastify.css";

const Modal = (props) => {
  const { token } = useSelector((state) => state.regSlice);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleOk = async () => {
    console.log(token);
    try {
      const result = await logoutApi(token);
      toast.success("Logout Succesfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 300,
      });
      dispatch(setUser_id({ user_id: null }));
      dispatch(setPin({ pin: null }));
      dispatch(setToken({ token: null }));
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>{props.title}</p>
            </div>
            <div className={styles["modal-body"]}>{props.body}</div>
            <div className={styles["modal-footer"]}>
              <button className={styles.button} onClick={handleOk}>
                yes
              </button>
              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                no
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
