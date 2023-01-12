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

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

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
      window.open(`${result.data.data.redirectUrl}`);
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
                {/* <span
                className={`${styles["currency"]}`}
                >Rp. */}
                <input
                  // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  pattern="[0-9.,]+"
                  required data-type="number"
                  placeholder="Rp1,000,000.00"
                  className={` ${styles["btn-topup"]}`}
                  type="number"
                  name="amount"
                  id=""
                  onChange={handlerPin}
                />
                {/* </span> */}
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
