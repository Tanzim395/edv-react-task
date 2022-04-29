import React from "react";
import Style from "./index.module.css";

export default function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.left}>
        <p className={Style.title}>Edvora</p>
        <p
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24.2px",
            paddingRight: "10px",
          }}
        >
          Dhurv Singh
        </p>
      </div>
      <div
        style={{
          width: "7%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",

          paddingLeft: "10px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt="red"
            src="https://i.ibb.co/ww8f2f9/istockphoto-532237983-612x612.jpg"
          />
        </div>
      </div>
    </div>
  );
}
