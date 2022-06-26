import React, { useState, useEffect, useContext } from "react";
import { UserIcon, XIcon, UserAddIcon } from '@heroicons/react/solid'
import { Avatar } from '../components/Avatar';
import { Store } from '../main';
import { useNavigate} from "react-router-dom";


function Intro() {
    const store = useContext(Store);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        store.name = name;
    }, [name])
    
    function generate(e){
         event.preventDefault();
        navigate('/generate');
    }
    return (
      <main className="flex h-full items-center justify-center bg-gray-100">
        <div className="min-h-1/3 m-4 rounded-md bg-white p-4  shadow-lg md:m-0 md:w-2/3 lg:w-1/3">
          <div className="flex">
            <UserAddIcon className="h-6 w-6 rounded-full bg-green-200 p-1 text-[5px] text-green-700 md:h-8 md:w-8" />
            <div className="self-baseline px-3 text-base font-bold text-gray-900 md:text-lg">
              Create card
            </div>
            <div className="ml-auto flex self-baseline rounded-full p-1 shadow shadow-gray-400">
              <XIcon className="h-3 w-3 font-semibold text-gray-400" />
            </div>
          </div>
          <p className="my-2 text-sm text-gray-700 md:text-base">
            Join millions of Nigerians stanning Peter Obi for a better Nigeria.
          </p>

          <div className="my-4 border-[.01px] border-gray-200/75"></div>
          <form onSubmit={generate}>
            {/* <div className="p-2 flex justify-center">
                            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-yellow-700 hover:text-white">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select your picture</span>
                                <input onChange={handleFile} type='file' className="hidden" />
                            </label>
                        </div> */}
            <div className="flex justify-center p-2">
              <Avatar
                outerRingClass="h-[150px] w-[150px] border-4"
                innerRingClass="h-[130px] w-[130px] border-[8px]"
              />
            </div>
            <div className="p-2">
              <label className="relative block">
                <span className="mb-2 block text-sm font-medium text-slate-700 after:absolute after:p-px after:text-red-500 after:content-['*']">
                  Your Name
                </span>
                <input
                  required
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  type="text"
                  className="invalid:text-600 peer block w-full rounded-md border border-slate-300 bg-white px-3 py-2 pl-12 text-sm font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-transparent invalid:border-pink-500 focus:ring focus:ring-blue-400"
                />
                <UserIcon className="pointer-events-none absolute top-2/3 left-3 h-6 w-6 -translate-y-1/2 transform text-gray-900 peer-focus:text-green-700" />
              </label>
            </div>

            <div className="flex p-2">
              <button className="flex w-full justify-center rounded border-0 bg-yellow-600 p-2 text-sm font-semibold text-white  outline-transparent focus:ring focus:ring-yellow-500/75">
                <span className="mx-auto">Continue</span>
              </button>
            </div>
            <div className="my-4 border-[.01px] border-gray-200/75"></div>
            <p
              id="sfctppqa4ugwgx2m6atkercu3l3ujs6d2rk"
              className="text-center text-sm text-gray-600"
            >
            </p>
          </form>
        </div>
        <script
          defer
          type="text/javascript"
          src="https://counter9.stat.ovh/private/counter.js?c=tppqa4ugwgx2m6atkercu3l3ujs6d2rk&down=async"
          async
        ></script>
      </main>
    );
}

export default Intro;