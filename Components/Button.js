import buttonStyles from "../styles/Button.module.scss";
import { useState } from "react";
// let t=false;
// console.log(t,"t__")
// const showName = () => {
//   return t= true;
// };
const Button = () => {
  const [clicked, setClicked] = useState(false);
  const showName = () => {
    setClicked(!clicked);
    alert("My Name ")
  };
  return (
    <div>
      <button className={buttonStyles.button} onClick={showName}>
        Click Me!
      </button>
      {clicked ? <p className={buttonStyles.text}> "My Name is Alok"</p> : ""}
    </div>
  );
};

export default Button;
