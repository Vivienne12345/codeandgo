import Image from "next/image";
import { FC } from "react";
import logo from "@/assests/logo.png";
import WhyImage from "@/assests/why.png";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import Figures from "./Figures";

interface WhyUsProps {}

const WhyUs: FC<WhyUsProps> = ({}) => {
  const list = [
    {
      id: 0,
      title: "Expertise",
      desc: "Years of industry experience empower us to conquer projects of any complexity with finesse.",
    },
    {
      id: 1,
      title: "Creativity",
      desc: "We're trailblazers, crafting solutions that captivate, innovate, and leave a lasting impression.",
    },
    {
      id: 2,
      title: "Collaboration",
      desc: "Your vision is our mission. Together, we'll transparently sculpt your dreams into digital reality.",
    },
    {
      id: 3,
      title: "Results-Driven",
      desc: "Your success fuels our passion. Expect nothing less than surpassing objectives and propelling your business to new heights.",
    },
  ];

  return (
    <div
      className="my-16 bg-image-reverse lg:h-screen flex flex-col justify-center lg:items-center px-8 "
      id="about"
    >
      <div className="flex flex-col  ">
        <div className="text-4xl my-8 border-[#d3113c] border-b-4 w-max">
          <h2 className="font-bold "> Why CG?</h2>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap lg:flex-nowrap lg:w-4/6 items-center justify-center ">
        {list.map((item) => (
          <div key={item.id} className="bg-secondary rounded-lg p-4 border lg:h-48 lg:w-48 ">
            <span className="text-[#d3113c]">{item.title}</span>
            <h2 className="text-sm text-secondary-foreground">{item.desc}</h2>
          </div>
        ))}
      </div>
      <Figures/>
    </div>
  );
};

export default WhyUs;
