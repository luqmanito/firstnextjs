import React, { Fragment, useEffect, useState } from "react";
import styles from "../topUp/topup.module.scss";
import Image from "next/image";
import x from "../../../public/asset/x.png";
import { topUpApi } from "../../pages/api/utils";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const PinConfirm = (props) => {
  const [body, setBody] = useState(null);
  const router = useRouter();

  const handlerPin = (e) =>
    setBody({ [e.target.name]: Number(e.target.value) });

  const { token } = useSelector((state) => state.regSlice);

  console.log(body);

  const finalBody = { amount: body };

  const handleOk = async (props) => {
    console.log(token);
    try {
      const result = await topUpApi(body, token);
      console.log(result.data.data.redirectUrl);
      window.open(`${result.data.data.redirectUrl}`)
      // router.push(`${result.data.data.redirectUrl}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.open ? (
        <main className={` ${styles["main-pin"]}`}>
          <section className={` ${styles["sec-pin"]}`}>
            <Image
              onClick={() => props.setOpen(!props)}
              className={` ${styles["sec-x"]}`}
              src={x}
              alt="gbr"
            />
            <p className={` ${styles["p1"]}`}>Topup</p>
            <p className={` ${styles["p2"]}`}>
              Enter the amount of money, and click submit.{" "}
            </p>
            <form action="">
              <div className="container">
                <input
                  className={` ${styles["btn-topup"]}`}
                  type="text"
                  name="amount"
                  id=""
                  onChange={handlerPin}
                />
              </div>
            </form>
            <button onClick={handleOk} className={` ${styles["btn-pin"]}`}>
              Continue
            </button>
          </section>
        </main>
      ) : null}
    </>
  );
};

export default PinConfirm;
