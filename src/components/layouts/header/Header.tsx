"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openMenu } from "src/stores/openMenu/reducer";
import { HamburgerButton } from "src/components/elements/button/humbergerButton/HamburgerButton";
import { SideMenu } from "src/components/elements/sideMenu/SideMenu";
import { OverLay } from "src/components/elements/overlay/OverLay";
import type { OpenMenu, ThemeId, ThemeList } from "src/types/index";

const themeListInitialState = [{ id: "", title: "", created_at: "" }];

function Header() {
  const [themeList, setThemeList] = useState<ThemeList>(themeListInitialState);
  const dispatch = useDispatch();
  const isOpen = useSelector<OpenMenu, boolean>(
    (state) => state.openMenu.isOpen
  );
  const themeId = useSelector<ThemeId, string>((state) => state.themeId.value);

  useEffect(() => {
    const fetchThemeIdList = async () => {
      const response = await fetch("/api/openai/chat");
      const themeList = await response.json();
      setThemeList(themeList);
    };
    fetchThemeIdList();
  }, [themeId]);

  return (
    <header className="flex justify-end h-16 pr-3">
      <HamburgerButton
        isOpen={isOpen}
        setOpenMenu={() => dispatch(openMenu())}
      />
      <OverLay isOpen={isOpen} setOpenMenu={() => dispatch(openMenu())} />
      <SideMenu isOpen={isOpen} themeList={themeList} />
    </header>
  );
}

export { Header };
