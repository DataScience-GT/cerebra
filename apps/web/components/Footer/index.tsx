// components/Footer/Footer.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/dsgt/apple-touch-icon.png";
import footerBlob from "@/assets/images/blobs/footer--export.svg";
import footerBlobMobile from "@/assets/images/blobs/footer-mobile2--export.svg";

interface FooterProps {
  screen_width: number;
}

const Footer = ({ screen_width }: FooterProps) => {
  const [windowWidth, setWindowWidth] = useState(screen_width || 0);
  const WIDTH_THRESHOLD = 1000;

  useEffect(() => {
    setWindowWidth(screen_width);
  }, [screen_width]);

  return (
    <div className="relative w-full flex flex-wrap pt-20 min-h-[300px] bg-gray-900 text-white">
      <Image
        src={windowWidth >= WIDTH_THRESHOLD ? footerBlob : footerBlobMobile}
        alt="footer blob"
        className="absolute w-full h-full top-0 left-0 object-cover"
      />

      <div className="relative w-full max-w-[1600px] mx-auto flex flex-wrap justify-around items-start gap-8 px-6">
        {/* Major */}
        <div className="flex flex-wrap items-center gap-4 p-5">
          <Image src={logo} alt="DSGT Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">DSGT</h1>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-start p-5">
          <h2 className="font-bold text-lg pb-1 text-center">Company</h2>
          <Link href="/about" className="pl-4 font-medium hover:underline">
            About Us
          </Link>
          <Link href="mailto:hello@datasciencegt.org" className="pl-4 font-medium hover:underline">
            Contact
          </Link>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col items-start p-5">
          <h2 className="font-bold text-lg pb-1 text-center">Connect with Us</h2>
          <Link href="mailto:hello@datasciencegt.org" className="pl-4 font-medium hover:underline">
            Email
          </Link>
          <a href="https://www.instagram.com/datasciencegt/" target="_blank" className="pl-4 font-medium hover:underline">
            Instagram
          </a>
          <a href="https://www.facebook.com/datasciencegt/" target="_blank" className="pl-4 font-medium hover:underline">
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/dsgt/" target="_blank" className="pl-4 font-medium hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/DataScience-GT" target="_blank" className="pl-4 font-medium hover:underline">
            Github
          </a>
        </div>

        {/* Footer Note */}
        <div className="flex flex-col items-start p-5 max-w-[300px]">
          <h2 className="font-bold text-lg text-center">
            Made with 💖 by the DSGT Tech Team.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
