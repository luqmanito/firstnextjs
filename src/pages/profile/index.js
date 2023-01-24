import React, { Fragment, useRef, useEffect, useState } from "react";
import styles from "../../styles/profile.module.scss";
import Image from "next/image";
import grid1 from "../../../public/asset/grid1.png";
import up1 from "../../../public/asset/up.png";
import plus from "../../../public/asset/plus.png";
import logout from "../../../public/asset/logout.png";
import people from "../../../public/asset/people.png";
import man2 from "../../../public/asset/pip.png";
import check from "../../../public/asset/check.png";
import { useSelector, useDispatch } from "react-redux";
import { editProfile, getProfile } from "../api/utils";
import Modal from "../../components/logout/logout";
import { useRouter } from "next/router";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Upload from "../../components/upload/upload";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import PageTitle from "../../components/page-tittle/pageTittle";

const ProfilePage = () => {
  const baseUrl = process.env.CLOUDINARY_LINK_HOST_KEY;
  const link = 'https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/'
  
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const { confirm } = useSelector((state) => state.confirmSlice);
  const [balance, setBalance] = useState(null);
  const [phone, setPhone] = useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [imageUser, setImageUser] = useState(null);
  const [formState, setFormState] = useState({
    pw1: "",
    pw2: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
  });
  const [body, setBody] = useState({
    image : null
  });
  const target = useRef(null);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      console.log(result.data.data);
      setPhone(result.data.data.noTelp);
      setUser(result.data.data.firstName);
      setImageUser(result.data.data.image)
    } catch (error) {
      console.log(error);
    }
  };
console.log(`from` + baseUrl);
  const navInfo = () => {
    router.push("/profile-info");
  };
  const navPwd = () => {
    router.push("/password");
  };
  const navPin = () => {
    router.push("/changepin");
  };
  const handleLogout = async () => {
    setOpen(!open);
  };
  const navDashb = () => {
    router.push("/dashboard");
  };


  // if (open) {
  //   document.body.classList.add(`${styles['active-modal']}`)
  // } else {
  //   document.body.classList.remove(`${styles['active-modal']}`)
  // }

  const data = new FormData();
  if (body.image !== undefined) {
    data.append("image", body.image);
  }
  console.log(data);
  const changeHandlerInputImage = (e) => {
    const files = e.target.files[0];
    setImage(files);
    setImagePreview(URL.createObjectURL(files));
    setFormState({ ...formState, image: e.target.files[0] });
    setImageUser(e.target.files[0]);
    setBody({
      ...body,
      image: files,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const result = await editProfile(data, token, user_id);
      toast.success("Profile picture updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  function tokenCheck() {
    let verify = Cookies.get("tokenUser");
    console.log(verify);
    if (!verify) {
      return router.push("/")
    }
  }
  console.log(body);

  useEffect(() => {
    tokenCheck();
    getDataProfile();
  }, []);

  return (
    <>
    <PageTitle title="Profile" />
      <Header />
      {/* <section className={`${styles["section-main"]}`}> */}
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image
                    className={` ${styles["menu"]}`}
                    src={man2}
                    alt="grb"
                  />
                  <span onClick={navDashb} className={` ${styles["spanpD"]}`}>
                    Dashboard
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} alt="grb" />
                  <span className={` ${styles["spanpt"]}`}>Transfer</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={plus}
                    alt="grb"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={people}
                    alt="grb"
                  />{" "}
                  <span className={` ${styles["spanpp"]}`}>
                    {" "}
                    <b>Profile</b>{" "}
                  </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={logout}
                    alt="grb"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className={`container ${styles["trans-wrap"]}`}>
                <div className="row">
                  <div className={`col ${styles["copl-pro"]}`}>
                    {/* <Image
                      className={` ${styles["check-img"]}`}
                      src={man2}
                      alt="grb"
                    /> */}
                    <div className={`${styles["man-wrap"]}`}>
                      <Upload
                        // ref={innerRef}
                        onChange={(e) => {
                          changeHandlerInputImage(e);
                        }}
                        img={imagePreview !== null ? imagePreview : link+imageUser}
                        name="image"
                        // objectFit="cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={body.image === null ? `${styles["save-div"]}`: `${styles["save-display"]}`}>
                      <button 
                      onClick={handleSubmit}
                      className={` ${styles["save"]}`}>Save</button>
                    </div>
                    {/* <p className={` ${styles["edit"]}`}>✎ Edit</p> */}
                    <p className={` ${styles["rob"]}`}>{user}</p>

                    <p className={` ${styles["hp"]}`}>{phone}</p>
                    <div className={` ${styles["cen-pro"]}`}>
                      <button
                        onClick={navInfo}
                        className={` ${styles["btn-pro"]}`}
                      >
                        Personal Information →
                      </button>{" "}
                      <br />
                      <button
                        onClick={navPwd}
                        className={` ${styles["btn-pro"]}`}
                      >
                        Change Password →
                      </button>{" "}
                      <br />
                      <button
                        onClick={navPin}
                        className={` ${styles["btn-pro"]}`}
                      >
                        Change PIN →
                      </button>{" "}
                      <br />
                      <button
                        onClick={handleLogout}
                        className={` ${styles["btn-pro"]}`}
                      >
                        Logout →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      {/* </section> */}
      <Footer />
      <Modal
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Do you really want to log out?"
      />
    </>
  );
};

export default ProfilePage;
