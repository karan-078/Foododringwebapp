
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import UserLink from "./UserLink";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-10 text-[#3a465b] p-4 flex items-center justify-between border-b-2 border-[#f47d38]/40 shadow-sm z-20 uppercase md:h-24 lg:px-40 xl:px-20  sticky top-0  left-0 bg-[#ffffff]">

         {/* logo- */}

         <div className="text-xl md:font-bold flex-1 ">
        <Link href="/" >Pizzanauts</Link>
      </div>

      <div className="hidden md:flex  gap-4 lg:gap-8 flex-1">
        {/* Left Links */}
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
   

      {/* moile menu */}

      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end lg:gap-12 flex-1">
      
     
        <CartIcon />
         <UserLink />
     
      </div>
    </div>
  );
};

export default Navbar;
