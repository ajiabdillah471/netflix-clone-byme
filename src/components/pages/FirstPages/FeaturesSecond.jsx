import React from "react";
import { ButtonSecond } from "../../Button";
import Input from "../../Input";
import Button from "../../Button";

const FeaturesSecond = ({ textMain, textSecond }) => {
  return (
    <div>
      <div className="bg-black border-b-8 border-[#232323] pb-28">
        <div className="text-white text-center px-4">
          <h1 className="font-bold text-4xl pt-20 lg:text-5xl ">{textMain}</h1>
          <p className="mt-6 text-lg ">{textSecond}</p>
        </div>
        <div className="w-full h-full flex flex-col gap-2 lg:gap-3">
          <ButtonSecond textMainBtnS="Apa itu Netflix?" />
          <ButtonSecond textMainBtnS="Berapa biaya berlanggan Netflix?" />
          <ButtonSecond textMainBtnS="Dimana saya bisa menonton?" />
          <ButtonSecond textMainBtnS="Bagaimana cara membatalkannya?" />
          <ButtonSecond textMainBtnS="Apa yang bisa ditonton di Netflix?" />
          <ButtonSecond textMainBtnS="Apakah Netflix sesuai bagi anak-anak?" />
        </div>
        <div className="px-6 mt-8">
          <p className="text-center text-white text-lg lg:text-xl">
            Siap menonton? Masukan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </p>
        </div>
        <div className="mx-auto w-full flex items-center flex-col gap-4 mt-6 lg:flex-row lg:justify-center">
          <div></div>
          <Input
            place="Alamat email"
            classname="w-[285px] h-[48px] lg:w-[445px] lg:h-[56px] text-white"
          />
          <Button
            type="submit"
            text="Mulai"
            className={
              "px-[20px] py-[12px] text-14 after:content-['>'] after:ml-2 lg:mt-0 lg:w-[130px] lg:h-[56px] lg:text-2xl"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSecond;
