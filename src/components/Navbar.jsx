import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="screen-max-width w-full py-3 sm:px-10 px-2 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center justify-between gap-6">
        <img
          src={appleImg}
          alt="Apple"
          width={12}
          height={16}
          className="md:hidden"
        />

        <div className="flex gap-6 w-full items-center justify-between max-md:hidden">
          {navLists.map((nav, index) =>
            nav.type === "image" ? (
              <img
                key={index}
                src={nav.value}
                alt={nav.alt}
                width={nav.width}
                height={nav.height}
              />
            ) : (
              <div
                key={index}
                className="text-xs cursor-pointer text-fadedwhite hover:text-white transition-all"
              >
                {nav.value}
              </div>
            )
          )}
        </div>

        <div className="flex items-baseline gap-6 md:hidden">
          <img src={searchImg} alt="search" width={14} height={14} />
          <img src={bagImg} alt="bag" width={14} height={14} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
