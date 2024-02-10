import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 50);
  }, []);

  return (
    <div className="page h-full flex justify-center items-center">
      {show ? (
        <div className="bg-gradient-to-r from-10% from-white via-violet-700 to-blue-900 to-90% dark:bg-gradient-to-r dark:from-10% dark:from-dark-base dark:via-yellow-400 dark:to-orange-500 dark:to-90% flex justify-center items-center animate-spin rounded-full h-[50px] w-[50px]">
          <div className="bg-white rounded-full dark:bg-dark-base h-[42px] w-[42px]"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
