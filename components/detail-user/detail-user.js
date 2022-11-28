import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man2 from "../../public/asset/pip.png";
import styles from "../detail-user/detail-user.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

function UsersDetail({name, phone, image, id}) {
  const router = useRouter();

  const {ed} = router.query

  return (
    <>
      <div className={` ${styles["wr-img"]}`}>
        <Image className={` ${styles["man2"]}`} src={man2} />
        <span className={` ${styles["suhi"]}`}>{name ? name: 'santi'}</span>{" "}
        <p className={` ${styles["acc2"]}`}>{phone ? phone : 'Empty' }</p>
      </div>
    </>
  );
}

export default UsersDetail;
