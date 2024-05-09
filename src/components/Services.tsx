import Image from "next/image";
import { FC } from "react";
import seoLogo from "@/assests/logos/seoLogo.svg";
import webDev from "@/assests/logos/webDev.svg";
import videoEditing from "@/assests/logos/videoEditing.svg";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  const services = [
    {
      id: 0,
      label: "Video Editing",
      icon: videoEditing,
    },
    {
      id: 1,
      label: "Web Design & Development",
      icon: webDev,
    },
    {
      id: 2,
      label: "App Development",
      icon: seoLogo,
    },
  ];
  return (
    <div
      className="bg-image flex flex-col justify-center items-center lg:h-screen px-8 "
      id="services"
    >
      <div
        id="row1"
        className="flex flex-col mb-8 lg:flex-row justify-center gap-8  w-full "
      >
        <div className="lg:p-8 lg:w-1/3 ">
          <h2 className="text-4xl font-bold border-b-4 w-max border-[#d3113c]">
            Our Expertise
          </h2>
          <h2 className="hidden lg:block text-secondary-foreground text-sm m-1">
            Unlocking Potential: Our Services Propel Your Business Forward
          </h2>
        </div>
        <div className="bg-secondary p-4 flex lg:flex-col gap-4 items-center lg:p-8 lg:w-1/3 rounded-lg border hover:translate-y-1  ">
          <Image src={services[0].icon} alt="q" className="w-12" />
          <h2 className="text-xl text-wrap">{services[0].label}</h2>
        </div>
      </div>
      <div
        id="row2"
        className="flex flex-col gap-8 lg:flex-row  w-full justify-center"
      >
        <div className="bg-secondary p-4 flex lg:flex-col gap-4 items-center lg:p-8 lg:w-1/3 rounded-lg border hover:translate-y-1 ">
          <Image src={services[1].icon} alt="q" className="w-12" />
          <h2 className="text-xl text-wrap">{services[1].label}</h2>
        </div>
        <div className="bg-secondary p-4 flex lg:flex-col gap-4 items-center lg:p-8 lg:w-1/3 rounded-lg border hover:translate-y-1 ">
          <Image src={services[2].icon} alt="q" className="w-12" />
          <h2 className="text-xl text-wrap">{services[2].label}</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
