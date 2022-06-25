import React, { useState, useRef, useEffect } from "react";
import poweredBy from "./powered-by-vitawind-dark.png";
import * as htmlToImage from "html-to-image";
import defaultImage from "./img/me.jpg"



function App() {
  const cardImage = useRef();
  const trigger = useRef();
  const upload = useRef();
  const centerImage = `url('${defaultImage}')`;
  
  const [tags] = useState("#TakeBackNaija #isOurTurnToRule #secure&UniteNaija #TurnAroundNaija");
  const [footerText] = useState("Generate yours @ https://obidient.vercel.app");

  function generate() {
    // upload.current.click();
    // htmlToImage
    //   .toPng(cardImage.current)
    //   .then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    //   })
    //   .catch(function (error) {
    //     console.error("oops, something went wrong!", error);
    //   });
  }

  function triggerUpload(){
    upload.current.click();
    // console.log('hello');
  }
  return (
    <div className="h-[200vh] bg-slate-900  text-center selection:bg-green-900">
      <header className="text- overflow-h-scroll flex h-[200vh] flex-col items-center justify-center bg-slate-900">
        <div
          ref={cardImage}
          className="card-img  relative flex h-[1028px] w-[800px] flex-col items-center justify-center bg-white"
        >
          <div className="mb-5 w-full bg-green-800 p-3 font-bold text-white">
            {" "}
            {tags}{" "}
          </div>
          <div className="bg-emerald-10 header flex w-full basis-full px-5">
            <div className="bg-red-20 flex basis-3/4">
              <div className="bgblue-900 h-[150px] basis-3/4 items-start justify-start">
                <img
                  className="h-[150px]  border-2 border-green-400 p-1"
                  src="src/img/labour-1.jpeg"
                />
              </div>
              <div className="bg-re-900 flex h-[150px] basis-full flex-col items-start justify-center p-1">
                {/* <span className="flex text-3xl font-bold leading-[1rem] text-green-700 ">
                  MR.
                </span> */}
                <span className="flex text-4xl font-extrabold leading-[3rem] text-green-700">
                  LABOUR
                </span>
                <span className="flex text-4xl font-extrabold leading-[2rem] text-green-700">
                  PARTY (LP)
                </span>
              </div>
            </div>
            <div className="bg-red-90 flex h-[150px] basis-1/4 flex-col items-start justify-center">
              <div className="flex text-4xl font-extrabold leading-[3rem] text-green-700">
                <span className="text-blue-700">MR</span>&nbsp;PETER
              </div>
              <span className="flex text-4xl font-extrabold leading-[2rem] text-red-500">
                OBI
              </span>
            </div>
          </div>
          <div className="ded flex-center bg-slate-90 flex w-full basis-full flex-col items-center justify-center px-5 py-5">
            <div className="pb-5 text-4xl font-extrabold">
              <span className="text-slate-90 bg-red-600 p-1 text-white ">
                {" "}
                FOR{" "}
              </span>{" "}
              <span className="p-1 text-slate-700"> PRESIDENT </span>
            </div>
            <div className="mt-5 flex h-[350px]  w-[350px] content-center items-center justify-center justify-items-center rounded-full  border-8 border-slate-200 border-r-green-600">
              <div
                ref={trigger}
                onClick={triggerUpload}
                className="flex h-[300px] w-[300px] content-center  items-center justify-center justify-items-center rounded-full border-[15px] border-slate-200 hover:cursor-pointer"
                style={{
                  backgroundImage: "",
                  backgroundSize: "cover",
                  PointerEvent: "all",
                  zIndex: 9000,
                }}
              >
                <svg
                  className="mb-3 h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 ">
                  <span className="font-semibold">Click to upload</span>
                </p>
              </div>
              <input
                ref={upload}
                name="upload"
                type="file"
                className="hidden"
              />
            </div>
          </div>
          <div className="bg-emeral-100 footer mb-5 flex w-full basis-full rounded-lg px-5">
            <div className="bg-slate200  justify-content relative flex w-full justify-center rounded-lg border-2 border-dashed border-green-400 p-5 p-1 shadow shadow">
              <div
                className="bg-re0 relative m-auto w-full p-5"
                style={{ position: "relative" }}
              >
                <span className="inline-flex px-2 text-4xl font-extrabold  text-blue-900 ">
                  I
                </span>
                <span className="inline-flex items-center justify-center rounded-full bg-slate-500 px-8 py-1  text-4xl font-extrabold capitalize text-white">
                  noble
                </span>
                <br />
                <span className="inline-flex px-2 text-4xl font-extrabold  text-blue-900">
                  STANDS WITH
                </span>
                <br />
                <span className="inline-flex px-2 text-5xl font-extrabold uppercase leading-[3rem] text-red-500">
                  peter
                </span>
                <span className="inline-flex px-2 text-5xl font-extrabold uppercase leading-[3rem] text-green-700">
                  Obi
                </span>
                <br />
                <span className="flex inline-flex items-center  text-center text-2xl font-extrabold uppercase text-blue-900">
                  For a better nigeria
                </span>
              </div>
            </div>
          </div>
          <div className="mb-0 w-full bg-green-800 p-3 font-bold text-white">
                {footerText}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
