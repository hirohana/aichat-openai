"use client";

import { useDispatch } from "react-redux";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { MenuList } from "src/features/menuList/components/MenuList";
import { menuOpen } from "src/stores/menuOpen/reducer";

function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const dispatch = useDispatch();
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            // onClick={() => dispatch(menuOpen())}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* <MenuList /> */}
      </nav>
    </header>
  );
}

export { Header };
