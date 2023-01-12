import React, { useEffect, useRef, useState } from "react";
import styles from "../upload/upload.module.css";
import Image from "next/image";

const Upload = ({img, ...rest}) => {
  return (
    <div className={`${styles["upload"]}`}>
      {img && (
        <Image
        
          className={`${styles["img-preview"]}`}
          
          alt="preview"
          src={img}
          width={100}
          height={100}
        />
      )}
      <br />
      <label htmlFor="file-upload" className={`${styles["custom-file-upload"]}`}>
        <i className={`${styles["theButton"]}`}>✎ </i> <span>Change Picture</span>
      </label>
      <input
        name="image"
        className={`${styles["upload-button"]}`}
        type="file"
        id="file-upload"
        {...rest}
      />
    </div>
  );
};

export default Upload;
