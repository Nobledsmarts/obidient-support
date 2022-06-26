import React, { useState, useContext } from "react";
import { Store } from "../main";

export const Avatar = ({
  outerRingClass = "h-[350px] w-[350px] border-8",
  innerRingClass = "h-[300px] w-[300px] border-[15px]",
  displayPlaceholder = true
}) => {
  const store = useContext(Store);
  const [placeholderText, setPlaceholderText] = useState('Click to Upload');

  function handleFile(e) {
    setPlaceholderText("Uploading...");
    const input = e.target;
    const uploadedFile = input.files[0];
    generateBase64(uploadedFile);
  }
  function generateBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener(
      "load",
      function () {
        store.profilePic = reader.result;
        setPlaceholderText("");
      },
      false
    );
    console.log(reader.result);
  }
  return (
    <>
      <div
        className={`mt-5 flex ${outerRingClass} content-center items-center justify-center justify-items-center rounded-full   border-slate-200 border-r-green-600`}
      >
        <label
          className={`flex ${innerRingClass} innerRing  relative content-center items-center justify-center justify-items-center rounded-full border-slate-200 hover:cursor-pointer`}
          style={{
            backgroundImage: `url(${store.profilePic})`,
            backgroundSize: "cover",
            PointerEvent: "all",
            zIndex: 9000,
          }}
        >
          {displayPlaceholder ? (
            <>
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
                <span className="font-semibold">{placeholderText}</span>
              </p>
              <label
                className="mr-n5 white-text innerRingLabel absolute flex hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-blue-900 shadow-md"
                htmlFor="upload"
              >
                <svg
                  className="h-6 w-6 text-gray-200"
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
              </label>
            </>
          ) : (
            ""
          )}
          <input
          accept="image/*"
            name="upload"
            type="file"
            className="hidden"
            onChange={handleFile} required
          />
        </label>
      </div>
    </>
  );
};
