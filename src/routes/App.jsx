import React, { useState, useRef, useEffect, useContext } from "react";
import * as htmlToImage from "html-to-image";
import defaultImage from "../img/me.jpg"
import partyImage from "../img/labour-1.jpeg";
import rocket1 from "../img/rocket1.gif";
import rocket2 from "../img/rocket2.gif";
import ObiImage from "../img/fritz_3.jpg";
import { Store } from "../main";
import { Avatar } from "../components/Avatar";




function App() {
   const store = useContext(Store);
  const cardImage = useRef();
  const preloader = useRef();
   const preview = useRef();
  
  const [tags] = useState("#ObiDient #Piggyvest #TakeBackNaija #secure&UniteNaija #TurnAroundNaija");
  const [footerText] = useState("Generate yours @ https://obidient.vercel.app");

  useEffect(() => {
    setTimeout(() => {
      htmlToImage
        .toPng(cardImage.current)
        .then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;
          preview.current.innerHtml = "";
          preview.current.appendChild(img);
          cardImage.current.style.display = "none";
          preloader.current.style.display = "none";
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }, 3000)
  }, []);

  function generate() {
    // upload.current.click();
    //
  }

  function triggerUpload(){
    upload.current.click();
    // console.log('hello');
  }
  return (
    <div className="h-full bg-slate-900  text-center selection:bg-green-900">
      <div
        ref={preloader}
        class="preloader fixed absolute flex h-full w-full flex-col items-center justify-center bg-slate-800"
        style={{ zIndex: 9999, position: " fixed" }}
      >
        <div class="flex w-full justify-center">
          <img src={rocket1} />
        </div>
        <div class="w-full">
          <h1 class="inline-flex rounded-full bg-slate-900 px-5 py-3 text-xl font-bold text-white">
            Generating Card...Please Wait
          </h1>
        </div>
      </div>
      <header className="text- overflow-h-scroll flex h-full flex-col items-center justify-center bg-slate-900">
        <div  ref={preview}></div>
        <div className="w-[50%]">
          <div className="flex-col flex">
            <button className="basis-full my-2 flex w-full justify-center rounded border-0 bg-indigo-600 p-2 text-sm font-semibold text-white  outline-transparent focus:ring focus:ring-yellow-500/75">
              <span className="mx-auto">Download</span>
            </button>
            <button className="basis-full my-2 flex w-full justify-center rounded border-0 bg-orange-600 p-2 text-sm font-semibold text-white  outline-transparent focus:ring focus:ring-yellow-500/75">
              <span className="mx-auto">Back</span>
            </button>
          </div>
        </div>
        <div
          ref={cardImage}
          className="card-img relative flex h-[1028px] w-[800px] flex-col items-center justify-center bg-white"
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
                  src={partyImage}
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
            {/* Supporter  */}
            {/* <div>
                <img
                  className="h-[300px] w-full"
                  src={ObiImage}
                />
            </div> */}
            <Avatar displayPlaceholder={false} />
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
                <span className="inline-flex items-center justify-center rounded-full bg-slate-500 px-8 py-1 text-4xl  font-extrabold capitalize capitalize text-white">
                  {store.name}
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
                <span className="inline-flex items-center  text-center text-2xl font-extrabold uppercase text-blue-900">
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
