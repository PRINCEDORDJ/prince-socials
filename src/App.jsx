import React from "react";
import imgtit from "../img/prince.jpg";
import { linked } from "./config/links";
import "./App.css";
import clsx from "clsx";

let body = document.querySelector("body");

const App = () => {
  return (
    <div className="flex items-center justify-center absolute top-10 left-0 right-0 max-md:absolute max-md:top-5">
      <div className="outline-2 outline-blue-400 rounded-3xl px-5 py-10 max-md:py-5  w-[420px] max-lg:m-auto max-lg:max-md:w-[320px] left-0 right-0 m-auto">
        <div className="flex flex-col justify-center items-center ">
          <img
            src={imgtit}
            alt="prince"
            width={100}
            className="rounded-full object-contain"
          />
          <h2 className="font-bold">Prince Dordjie</h2>
          <p>Just a chill guy who loves tech</p>
          <div className="flex flex-col gap-2 outline-blue-400 mt-10 w-full outline-1  rounded-3xl py-5 px-2">
            <h4 className="font-bold">Connect with me via:</h4>
            {linked.map(({ id, title, icon, link }) => (
              <div
                key={id}
                className={clsx(
                  "outline-1  w-90 max-lg:w-full px-2  py-2 rounded-full hover:scale-102 transition-all delay-200 ",
                  id === 0 &&
                    "hover:bg-pink-400 hover:shadow-pink-400 hover:shadow-2xl outline-pink-300 bg-pink-200 ",
                  id === 1 &&
                    "hover:bg-gray-500 hover:shadow-bg-gray-500 hover:shadow-2xl outline-gray-300 bg-gray-200",
                  id === 2 &&
                    "hover:bg-red-600 hover:shadow-bg-red-600 hover:shadow-2xl outline-red-300 bg-red-200",
                  id === 3 &&
                    "hover:bg-blue-400 hover:shadow-bg-blue-400 hover:shadow-2xl outline-blue-300 bg-blue-200",
                  id === 4 &&
                    "outline-yellow-300 bg-yellow-200 hover:bg-yellow-400 hover:shadow-bg-yellow-400 hover:shadow-2xl",
                  id === 5 &&
                    "outline-white bg-white hover:bg-white hover:text-black hover:shadow-bg-white hover:shadow-2xl"
                )}
              >
                <a
                  href={link}
                  className="flex flex-row gap-30 max-lg:gap-10  items-center "
                  onClick={() => {
                    const mess = document.createElement("div");

                    setTimeout(() => {
                      mess.innerHTML = `<p>Redirecting to ${title}`;

                    body.appendChild(mess);
                    }, 3000);

                    mess.classList.add("mess");
                    
                  }}
                >
                  <img src={icon} width={30} />
                  <p>{title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
