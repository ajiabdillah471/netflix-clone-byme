import React from "react";
import Input from "../../Input";
import Button from "../../Button";

const Login = () => {
  return (
    <>
      {/* banner */}
      <div
        className="hidden md:block relative h-full w-full border-b-8 border-[#232323]
        after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.4)] after:bg-gradient-to-b after:from-firstblack after:via-secondblack  after:to-thridblack  "
      >
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner netflix"
          className="w-full h-[565px] object-cover md:h-[1100px] lg:h-[1000px]"
        />
      </div>
      {/* content star */}
      <div className="bg-black  w-full absolute z-[1000] top-0 md:bg-transparent ">
        <div className="p-4 md:p-6">
          <svg
            viewBox="0 0 111 30"
            fill="#e50914"
            class="w-20 md:w-36"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        </div>

        <div className="bg-[rgba(0,0,0,0.6)] md:w-[450px] mx-auto p-6">
          <div className="px-6 md:w-full mx-auto ">
            <h1 className="text-white text-3xl font-bold">Log In</h1>
            <form action="">
              <Input
                typ="input"
                place="Email or phone number"
                classname="mt-4 mx-auto block
            w-full h-[50px] bg-[#464545] outline-none border-none focus:outline-none active:outline-none"
              />
              <Input
                typ="input"
                place="Password"
                classname="mt-6 mx-auto block
            w-full h-[50px] bg-[#464545] outline-none border-none focus:outline-none active:outline-none "
              />
              <Button
                type="submit"
                text="Log In"
                className="w-full py-[15px] mt-8 font-bold text-xl"
              />
            </form>
          </div>
          <div className="mt-4 px-6 flex justify-between  md:w-full mx-auto ">
            <label htmlFor="" className="text-[#737373] ">
              <input type="checkbox" className="" />
              Remember me
            </label>
            <p className="text-[#737373]">Need help?</p>
          </div>
          <div className="px-6  md:w-full mx-auto ">
            <p className="text-[#737373] mt-4">
              New to Netflix <span className="text-white">Sign up now</span>
            </p>
            <p className="text-[#737373] mt-4">
              This page is protected by Google reCAPCHA to resume you're not a
              bot. <span className="text-blue-700">Learn more</span>
            </p>
          </div>
        </div>

        {/* bagian footer  */}
        <div className="text-[#737373] mt-32 border-t border-[#737373] px-6 pt-6 pb-6 bg-[rgba(0,0,0,0.6)] md:pb-48 lg:pb-24">
          <h2 className="pb-6">Ada pertanyaan? Hubungi 083827150774</h2>
          <div className="flex flex-wrap">
            <div className="text-sm w-1/2">
              <p>Tanya Jawab</p>
              <p className="my-3">Ketentuan Pengguna</p>
              <p>Preferensi Cookie</p>
            </div>
            <div className="text-sm w-1/2 ">
              <p>Pusat Bantuan</p>
              <p className="my-3">Privasi</p>
              <p>Informasi Perusahaan</p>
            </div>
          </div>
          <div className=" mt-10 ">
            <select
              name=""
              id=""
              className="w-[175px] h-[45px] bg-transparent text-[#737373] outline outline-1 rounded-md p-2 active:outline-yellow-700 active:outline-2  focus:active:outline-yellow-700 duration-500"
            >
              <option value="">Bahasa Indonesia</option>
              <option value="">English</option>
            </select>
          </div>
        </div>
      </div>
      {/* content end */}
    </>
  );
};

export default Login;
