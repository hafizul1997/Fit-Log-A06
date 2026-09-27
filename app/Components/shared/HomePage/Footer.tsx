import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black">

      {/* Full Width Divider */}
      <div className="w-full border-t border-gray-800" />

      {/* Footer Content */}
      <div className="mx-auto w-full max-w-\[1280px] px-3 py-5 sm:px-6">
        <div className="mx-2 flex flex-col items-center justify-between gap-3 sm:mx-0 sm:flex-col lg:flex-row lg:gap-0">

          {/* Left Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src={Logo}
              alt="FitLog Logo"
              width={25}
              height={30}
              className="object-cover"
            />

            <h2 className="text-base font-bold text-white sm:text-lg">
              FitLog
            </h2>
          </div>

          {/* Right Side */}
          <p className="text-center text-xs text-gray-400 sm:text-sm">
            © 2026 FitLog. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;