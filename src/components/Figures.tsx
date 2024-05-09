"use client";
import { FC } from "react";
import project from "@/assests/logos/project.svg";
import customer from "@/assests/logos/customer.svg";
import Image from "next/image";

interface FiguresProps {}

const figures = [
  {
    id: 0,
    icon: project,
    title: "Completed Projects",
    number: "10+",
  },
  {
    id: 1,
    icon: customer,
    title: "Customer Satisfaction",
    number: "90%",
  },
];
const Figures: FC<FiguresProps> = ({}) => {
  return (
    <div className="my-8">
      <div className="flex flex-col justify-center items-center rounded-lg  gap-2 lg:flex-row">
        {figures.map((fig) => (
          <div
            key={fig.id}
            className=" bg-secondary flex flex-col justify-center items-center rounded-lg p-8 w-64 "
          >
            <Image src={fig.icon} alt="icon" className="w-12" />
            <h2 className="text-sm m-2">{fig.title}</h2>
            <h1 className="text-4xl font-bold text-[#d3113c]">{fig.number}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figures;
