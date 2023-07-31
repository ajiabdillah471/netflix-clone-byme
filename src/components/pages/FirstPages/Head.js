import React from "react";
import Button from "../../Button";
import Input from "../../Input";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const clickSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div>
        {/* pr buat aji, jadi afterna dinu div atau pembungkusna bukan di tag img da moal muncul */}

        <header className="relative">
          <div className="absolute z-[1000] flex justify-between items-center w-full p-6 bg-transparent mb-6 lg:px-32">
            <div className="w-[90px] lg:w-[145px]">
              <svg
                viewBox="0 0 111 30"
                fill="#e50914"
                //   class="w-28"
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
            <div className="flex gap-2 items-center">
              <div className="w-fit">
                {/* <label htmlFor="language">Pilihan : </label> */}
                <select
                  name="language"
                  id="language"
                  className="px-[16px] py-[3px] w-[50px]  outline outline-1 outline-white rounded-md text-red-500 bg-transparent"
                >
                  <option value="ID">Bahasa Indonesia</option>
                  <option value="EN">English</option>
                </select>
              </div>
              <Button
                type="submit"
                text="Masuk"
                className={" px-[16px] py-[4px] text-14"}
                click={clickSubmit}
              />
            </div>
          </div>

          {/* banner */}
          <div
            className="relative h-full w-full border-b-8 border-[#232323]
        after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.4)] after:bg-gradient-to-b after:from-firstblack after:via-secondblack  after:to-thridblack  "
          >
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt="banner netflix"
              className="w-full h-[565px] object-cover lg:h-full"
            />
          </div>

          {/* text area  */}
          <div className="contaniner">
            <div className=" absolute top-0 h-full w-full text-center text-white flex justify-center items-center lg:px-32">
              <div>
                <h1 className="text-4xl font-bold lg:text-5xl">
                  Film, acara TV tak terbatas, dan banyak lagi
                </h1>
                <p className="text-xl mt-4 lg:text-2xl lg:mt-6">
                  Tonton di manapun. Batalkan kapan pun
                </p>
                <p className="text-xl mt-6">
                  Siap menonton? Masukkan email untuk membuat atau memulai lagi
                  keanggotaanmu.
                </p>
                <div className="mt-6 lg:flex lg:items-center lg:justify-center lg:gap-2">
                  <Input
                    type="text"
                    place="Alamat Email"
                    classname="w-[285px] h-[48px] lg:w-[445px] lg:h-[56px] text-white"
                  />
                  <Button
                    type="submit"
                    text="Mulai"
                    className={
                      " px-[20px] py-[12px] text-14 mt-6 after:content-['>'] after:ml-2 lg:mt-0 lg:w-[130px] lg:h-[56px] lg:text-2xl"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Head;
