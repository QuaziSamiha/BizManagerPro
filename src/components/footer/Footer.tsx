import { Building, Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* <div className="bg-blue-100 bg-opacity-30 py-8"></div> */}
      <footer className="flex flex-col gap-10 bg-blue-700 text-blue-50 pt-8 pb-4">
        <div className="container mx-auto flex justify-evenly text-center md:text-left">
          <div className="w-1/4">
            <h4 className="text-lg font-bold">About Us</h4>
            <p className="text-sm mt-2">
              BizManager Pro is a cutting-edge business management platform that
              helps you streamline operations, manage employees, handle multiple
              shops, and enhance customer experiences.
            </p>
          </div>
          <div className="w-1/4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm mt-2">
              <p className="flex items-center gap-2">
                <MdEmail size={16} /> support@bizmanagerpro.com
              </p>
              <p className="flex items-center gap-2 ">
                <Phone size={16} /> +1-234-567-890
              </p>
              <p className="flex items-center gap-2 ">
                <Building size={16} /> 123 Business Street, Cityville, Country
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm">
            Designed to empower businesses, one solution at a time.
          </p>
          <p className="text-xs">
            © {currentYear} BizManager Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
