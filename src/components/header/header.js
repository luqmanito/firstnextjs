import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man2 from "../../../public/asset/pip.png";
import styles from "../header/header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../pages/api/utils";

function Header() {

  const [phone, setPhone] = useState(null);
  const [user, setUser] = useState(null);
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);

  const getDataProfile = async () => {
    try {
      const result = await getProfile (user_id, token);
      setPhone(result.data.data.noTelp);
      setUser(result.data.data.firstName)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

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
                <Image className={` ${styles["man"]}`} src={man2} />
              </div>
              <div class="col-6 col-md-4">
                <p className={` ${styles["name"]}`}>{user}</p> <br />
                <p className={` ${styles["num"]}`}>{phone}</p>
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