import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className=" fixed top-0 w-full py-6 ">
      <div className="container mx-auto">
        {/** Desktop Screen */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
        {/** Mobile  Screen */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
