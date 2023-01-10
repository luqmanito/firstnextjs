import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man2 from "../../../public/asset/pip.png";
import styles from "../dashboard-history/list-history.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

function UsersHistoryDashboard({ name, type, status, amount }) {
  const router = useRouter();

  const { ed } = router.query;
  const nav1 = () => {
    router.push(`/input-bank/${id}`);
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className={` ${styles["wr-img"]}`}>
            <Image className={` ${styles["man2"]}`} src={man2} alt="gbr"/>{" "}
            <span className={` ${styles["suhi"]}`}>{name}</span>{" "}
            <p
              className={
                status === "success"
                  ? ` ${styles["acc2"]}`
                  : ` ${styles["acc3"]}`
              }
            >
              {status}
            </p>
          </div>
        </div>
        <div className={`col-4 ${styles["idrhist"]}`}>
          <p
            className={
              type === "topup" ? `${styles["idrplus"]}` : `${styles["idr"]}`
            }
          >
            {type === "topup" ? `+${rupiah(amount)}` : `-${rupiah(amount)}`}
          </p>
        </div>
      </div>
    </>
  );
}

export default UsersHistoryDashboard;
