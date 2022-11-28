import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man from "../../public/asset/man.png"
import styles from "../header/header.module.scss";

function Header() {
  return (
    <>
    <section className={` ${styles["bg"]}`}>
       <main className={`container ${styles["two"]}`}>   
        <aside className={`row ${styles["row-f"]}`}>
          <div className={`col-md-8 ${styles["fazz"]}`}>
            <p> Fazzpay</p>
          </div>
          <div className={`col-6 col-md-4 ${styles["fazzy"]}`}>
            <div class="row">
              <div className={` col-6 col-md-4 ${styles["wrap-img"]}`}>
                <Image className={` ${styles["man"]}`} src={man} />
              </div>
              <div class="col-6 col-md-4">
                <p className={` ${styles["name"]}`}>Robert Chandler</p> <br />
                <p className={` ${styles["num"]}`}>+62 8139 3877 7946</p>
              </div>
              <div className={`col-6 col-md-4 ${styles["bell"]}`}>🔔</div>
            </div>
          </div>
        </aside>
      </main>
      </section>
    </>
  )
}

export default Header