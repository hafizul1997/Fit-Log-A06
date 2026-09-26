import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black">

      {/* Full Width Divider */}
      <div className="w-full border-t border-gray-800" />

      {/* Footer Content */}
      <div className="mx-auto  h-\[69px\] w-full max-w-\[1280px\] p-6 ">
        <div className="flex items-center justify-between mx-6 ">   
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="FitLog Logo"
            width={25}
            height={30}
            className="object-cover"
          />

          <h2 className="text-lg font-bold text-white">
            FitLog
          </h2>
        </div>

        {/* Right Side */}
        <p className="text-sm text-gray-400">
          © 2026 FitLog. All rights reserved.
        </p>
    </div>
      </div>
    </footer>
  );
};

export default Footer;