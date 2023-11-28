import React from "react";
import { useNavigate,Navigate } from "react-router-dom";
import { logout } from "../Context/Auth";
function RouteSwitch() {
  const nav = useNavigate();

  const buttonStyle1 = {
    border: "none",
    fontSize: "2vw", // Adjust font size using viewport width
    position: "absolute",
    // top: "80%",
    left: "30%", // Adjust left position using viewport width
    transform: "translate(50%, 150%)",
    zIndex: 1,
    color: "white",
    backgroundColor: "transparent"
  };

  const buttonStyle2 = {
    border: "none",
    fontSize: "2vw", // Adjust font size using viewport width
    position: "absolute",
    top: "10%",
    left: "42%", // Adjust left position using viewport width
    transform: "translate(50%, 150%)",
    zIndex: 1,
    color: "white",
    backgroundColor: "transparent"
  };

  const buttonStyle3 = {
    border: "none",
    fontSize: "2vw", // Adjust font size using viewport width
    position: "absolute",
    top: "10%",
    left: "45%", // Adjust left position using viewport width
    transform: "translate(50%, 150%)",
    zIndex: 1,
    color: "white",
    backgroundColor: "transparent"
  };

  const buttonStyle4 = {
    border: "none",
    fontSize: "2vw", // Adjust font size using viewport width
    position: "absolute",
    top: "10%",
    left: "61%", // Adjust left position using viewport width
    transform: "translate(50%, 150%)",
    zIndex: 1,
    color: "white",
    backgroundColor: "transparent"
  };

  const btn12 = {
 display:"flex",
 justifyContent:"center",
 margin:"10px auto"
  };


  const containerStyle = {
    position: "relative",
  };
  const handleLogout = () => {
    logout();
    return nav("/");
};
  return (
    <>
    <div style={containerStyle}>
      <button style={{ ...buttonStyle1, zIndex: 1 }} onClick={() => nav("image1")}>
        Home
      </button>
      <button style={{ ...buttonStyle2, zIndex: 1 }} onClick={() => nav("image2")}>
        Tv
      </button>
      <button style={{ ...buttonStyle3, zIndex: 1 }} onClick={() => nav("image3")}>
        The Frame
      </button>
      <button style={{ ...buttonStyle4, zIndex: 1 }} onClick={() => nav("image4")}>
        QLED
      </button>
    </div>
    <button onClick={handleLogout} style={btn12}>Logout</button>
    </>
  );
}

export default RouteSwitch;
