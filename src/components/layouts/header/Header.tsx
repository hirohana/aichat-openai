"use client";

import { useDispatch } from "react-redux";
import { menuList } from "src/components/elements/sideMenu/const/menuList";

import { useState } from "react";
import { HamburgerButton } from "src/components/elements/button/humbergerButton/HamburgerButton";
import { SideMenu } from "src/components/elements/sideMenu/SideMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="flex justify-end h-16 pr-3">
      <HamburgerButton
        openMenu={openMenu}
        setOpenMenu={() => handleMenuOpen()}
      />
      <SideMenu openMenu={openMenu} menuList={menuList} />
    </header>
  );
}

export { Header };
