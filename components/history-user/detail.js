import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man2 from "../../public/asset/pip.png";
import styles from "../../styles/history.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

function UsersHistory({name, status, amount}) {
  const router = useRouter();

  const {ed} = router.query
  const nav1 = () => {
    router.push(`/input-bank/${id}`);
  };

  return (
    <>
       <div class="row">
                <div class="col-8">
                  <div className={` ${styles["wr-img"]}`}>
                    <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                    <span className={` ${styles["suhi"]}`}>{name}</span>{" "}
                    <p className={` ${styles["acc2"]}`}>{status}</p>
                  </div>
                </div>
                <div className={`col-4 ${styles["idrhist"]}`}>
                <p className={`${styles["idr"]}`}>-{amount}</p>
                </div>
              </div>
    </>
  );
}

export default UsersHistory;
