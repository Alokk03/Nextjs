import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/Button.module.scss";
import Button from "../Components/Button";
import SignUpForm from "../Components/SignUpForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className={buttonStyles.buttonBody}>
        <SignUpForm/>
      </div> 
   
  );
}
