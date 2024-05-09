import { FC } from "react";
import Image from "next/image";
import ContactImage from "@/assests/contact.png";
import Link from "next/link";
import { links } from "./links";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="bg-secondary  p-16 " id="contact">
      <div className="flex justify-between items-center  ">
        <div className="">
          <div className="text-4xl">
            <h2>Let&apos;s Get Started</h2>
          </div>
          <div>
            <h3 className="text-secondary-foreground my-4 text-sm lg:w-1/2">
              Ready to elevate your digital presence? Contact us today to
              discuss your project and discover how [Brand Name] can turn your
              ideas into reality. Together, let&apos;s unlock the full potential
              of your digital journey.
            </h3>
          </div>
          <div className="btn w-32 text-center">
            <Link href={links.email} target="_blank">
              Contact Us
            </Link>
          </div>
          <Link href={links.email} target="_blank" className="hover:underline">
            <h2 className="my-4">Email : {links.emailId}</h2>
          </Link>
        </div>
        <div className="items-center justify-center w-1/2 hidden lg:flex">
          <Image src={ContactImage} alt="Main Hero Image" height={100} />
        </div>
      </div>
      <div className="text-sm">
        <h2 className="mt-4">Follow Us On: </h2>
        <div className="flex gap-4 text-secondary-foreground">
          <Link href={links.linkedin} className="hover:text-primary-foreground">
            Linkedin
          </Link>
          <Link
            href={links.instagram}
            className="hover:text-primary-foreground"
          >
            Instagram
          </Link>
          <Link href={links.twitter} className="hover:text-primary-foreground">
            X
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
