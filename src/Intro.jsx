import React, { useState, useRef, useEffect } from "react";
import { UserIcon, XIcon, UserAddIcon } from '@heroicons/react/solid'

function Intro() {
    return (
        <main className="bg-gray-100 h-full flex justify-center items-center border border-red-900">
        <div className="bg-white shadow-lg min-h-1/3 md:w-1/3 rounded-md  p-4 md:m-0 m-4">
            <div className="flex">
                <UserAddIcon
                    className="p-1 bg-green-200 rounded-full text-green-700 text-[5px] h-6 w-6 md:h-8 md:w-8" />
                <div className="text-gray-900 font-bold text-base md:text-lg self-baseline px-3">
                    Create card
                </div>
                <div className="flex ml-auto self-baseline rounded-full p-1 shadow shadow-gray-400">
                    <XIcon className="text-gray-400 h-3 w-3 font-semibold" />
                </div>
            </div>
            <p className="my-2 text-gray-700 text-sm md:text-base">
                Join millions of Nigerians stanning Peter Obi for a better Nigeria.
            </p>

            <div className="border-gray-200/75 border-[.01px] my-4"></div>
            <form>
                <div className="p-2 flex justify-center">
                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-yellow-700 hover:text-white">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">Select your picture</span>
                        <input type='file' class="hidden" />
                    </label>
                </div>
                <div className="p-2">
                    <label className="block relative">
                        <span
                            className="block text-sm font-medium text-slate-700 after:absolute after:content-['*'] after:text-red-500 after:p-px mb-2">
                            Your Firstname
                        </span>
                        <input v-model="username" type="text" 
                            className="peer block w-full pl-12 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-700 font-semibold focus:ring outline-transparent focus:ring-blue-400 invalid:border-pink-500 invalid:text-600" />
                        <UserIcon
                            className="peer-focus:text-green-700 pointer-events-none w-6 h-6 absolute top-2/3 transform -translate-y-1/2 left-3 text-gray-900" />
                    </label>
                </div>
                
                
                <div className="p-2 flex">
                    <button
                        className="flex justify-center bg-yellow-600 outline-transparent border-0 text-white w-full p-2 rounded text-sm  font-semibold focus:ring focus:ring-yellow-500/75">
                        <span className="mx-auto">Continue</span>
                    </button>
                </div>
                <div className="border-gray-200/75 border-[.01px] my-4"></div>
                <p className="text-sm text-gray-600 text-center">
                    Check out on <a href="#"
                        className="text-yellow-700 font-medium p-1 hover:text-yellow-900">github</a>
                </p>
            </form>
        </div>
    </main>
    )
}

export default Intro;