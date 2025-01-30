import { Handshake } from "lucide-react";
// 16 Jan, 25
const Navbar = () => {
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 fixed w-full z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <Handshake className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                BizManager Pro
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
