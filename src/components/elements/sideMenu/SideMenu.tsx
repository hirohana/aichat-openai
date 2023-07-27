import { ChatLogList } from "./ChatLogList";
import { MenuList } from "./MenuList";
import { UserList } from "./UserList";

import type { ThemeList } from "src/types";

type Props = {
  isOpen: boolean;
  themeList: ThemeList;
};

export function SideMenu({ isOpen, themeList }: Props) {
  return (
    <div>
      <nav
        className={
          isOpen
            ? "fixed right-0 w-48 sm:w-64 h-screen bg-white pt-8 px-3"
            : "fixed right-[-100%]"
        }
      >
        <ul className="mt-8 w-full">
          <UserList />
          <MenuList />
          <ChatLogList themeList={themeList} />
        </ul>
      </nav>
    </div>
  );
}
