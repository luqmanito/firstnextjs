import React, { Fragment, useEffect, useState } from "react";
import styles from "../enterpin/enterPin.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import x from "../../public/asset/x.png";
import { checkPinUser, topUpApi } from "../../pages/api/utils";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { transferBalance } from "../../pages/api/utils";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const ReactCodeInput = dynamic(import("react-code-input"));

const EnterPin = (props) => {
  const [body, setBody] = useState(null);
  const [check, setCheck] = useState(null);
  const router = useRouter();
  const { confirm } = useSelector((state) => state.confirmSlice);
  const { pin } = useSelector((state) => state.regSlice);
  console.log(pin);

  const handlerPin = (e) => setBody(Number(`${e}`));
  const { token } = useSelector((state) => state.regSlice);

  console.log(body);

  

  const [content, setContent] = useState({
    receiverId: confirm.confirm.id,
    amount: null,
    notes: null,
  });

  const checkPin = async () => {
    try {
      const result = await checkPinUser(body, token);
      console.log(result, "from checkpin");
      setCheck(result.data.msg);
    } catch (error) {
      setCheck(error.response.data.msg);
      console.log(error);
    }
  };
  const submitHandler = async (props) => {
    checkPin()
    if (check === "Correct pin") {
      try {
        const result = await transferBalance(content, token);
        toast.success("Please wait..", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        console.log(`pin benar`, result);
        router.push("/success")
      } catch (error) {
        console.log(error);
      }
    } 
    if (check === `Wrong pin`) 
      console.log("pin salah");
    
  };


  useEffect(() => {
    setContent(confirm.confirm);
    checkPin()
  }, []);
  console.log(content);
  return (
    <>
      {props.open ? (
        <main className={` ${styles["main-pin"]}`}>
          <section className={` ${styles["sec-pin"]}`}>
            <Image
              onClick={() => props.setOpen(!props)}
              className={` ${styles["sec-x"]}`}
              src={x}
            />
            <p className={` ${styles["p1"]}`}>Enter PIN to transfer</p>
            <p className={` ${styles["p2"]}`}>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.{" "}
            </p>
            <form action="">
              <div class="container">
                <ReactCodeInput
                  type="password"
                  name="pin"
                  fields={6}
                  onChange={handlerPin}
                />
            
              </div>
            </form>
            <button onClick={submitHandler} className={` ${styles["btn-pin"]}`}>
              Continue
            </button>
            <ToastContainer />
          </section>
        </main>
      ) : null}
    </>
  );
};

export default EnterPin;
