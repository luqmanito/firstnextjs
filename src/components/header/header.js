import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import man2 from "../../../public/asset/pip.png";
import styles from "../header/header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../pages/api/utils";
import { useRouter } from "next/router";

function Header() {
  const [phone, setPhone] = useState(null);
  const [user, setUser] = useState(null);
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const [imageUser, setImageUser] = useState();
  const link = "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/";
  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setPhone(result.data.data.noTelp);
      setUser(result.data.data.firstName);
      setImageUser(result.data.data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();
  const nav5 = () => {
    router.push("/dashboard");
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
              <p
              className={` ${styles["fazzpay"]}`}
              onClick={nav5}
              > Fazzpay</p>
            </div>
            <div className={`col-6 col-md-4 ${styles["fazzy"]}`}>
              <div className="row">
                <div className={` col-6 col-md-4 ${styles["wrap-img"]}`}>
                  <Image
                    className={` ${styles["man"]}`}
                    src={imageUser === undefined ? man2 : link + imageUser}
                    alt="gb"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-6 col-md-4">
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
  );
}

export default Header;
