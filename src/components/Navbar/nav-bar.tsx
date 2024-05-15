import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-6 bg-white lg:bg-transparent ">
      <div className="container mx-auto">
        {/** Desktop Screen */}
        <div className="hidden lg:flex">Dsktop nav</div>
        {/** Mobile  Screen */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
