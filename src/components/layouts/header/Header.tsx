"use client";

import { useDispatch, useSelector } from "react-redux";

import { openMenu } from "src/stores/openMenu/reducer";
import { HamburgerButton } from "src/components/elements/button/humbergerButton/HamburgerButton";
import { SideMenu } from "src/components/elements/sideMenu/SideMenu";
import { OverLay } from "src/components/elements/overlay/OverLay";
import type { OpenMenu } from "src/types/index";

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector<OpenMenu, boolean>(
    (state) => state.openMenu.isOpen
  );
  return (
    <header className="flex justify-end h-16 pr-3">
      <HamburgerButton
        isOpen={isOpen}
        setOpenMenu={() => dispatch(openMenu())}
      />
      <OverLay isOpen={isOpen} setOpenMenu={() => dispatch(openMenu())} />
      <SideMenu isOpen={isOpen} />
    </header>
  );
}

export { Header };
