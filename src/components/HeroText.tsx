import Image from "next/image";
import { FC } from "react";
import logo from "@/assests/logo.png";

interface HeroTextProps {}

const HeroText: FC<HeroTextProps> = ({}) => {
  return (
    <div className="bg-image-reverse h-screen p-16 ">
      <div className=" flex flex-col align-middle items-center justify-center mx-4 my-16">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row ">
          <div className="flex flex-col justify-center items-center ">
            <Image src={logo} alt="globe icon" className="w-64 mb-16" />
            <div className=" text-4xl lg:text-6xl lg:align-middle font-bold ">
              <h2>
                Transforming{" "}
                <span className="text-red text-[#d3113c]">Ideas</span>,
              </h2>
              <h2> Empowering Digital.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
