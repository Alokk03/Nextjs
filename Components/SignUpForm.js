import buttonStyles from "../styles/Button.module.scss";
import Button from "./Button";
const SignUpForm = () => {
  return (
    <>
      <form className={buttonStyles.formStyle}>
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <br/>
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <br/>
        <Button />
      </form>
    </>
  );
};

export default SignUpForm;
