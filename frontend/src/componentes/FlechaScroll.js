import React from "react";

const FlechaArriba = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#005DF4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#fff",
        fontSize: "20px",
      }}
      onClick={handleScrollToTop}
    >
      ⏫
    </div>
  );
};

export default FlechaArriba;