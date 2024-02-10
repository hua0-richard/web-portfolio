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
        <div className="bg-gradient-to-r from-violet-700 to-blue-900 dark:bg-gradient-to-r dark:from-yellow-400 dark:to-orange-500 flex justify-center items-center animate-spin rounded-full h-[50px] w-[50px]">
          <div className="bg-white rounded-full dark:bg-dark-base h-[42px] w-[42px]"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
