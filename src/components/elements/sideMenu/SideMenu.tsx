import { ChatLogList } from "./ChatLogList";
import { MenuList } from "./MenuList";
import { UserList } from "./UserList";

type Props = {
  isOpen: boolean;
};

export function SideMenu({ isOpen }: Props) {
  return (
    <div>
      <nav
        className={
          isOpen
            ? "fixed right-0 w-48 h-screen bg-white pt-8 px-3"
            : "fixed right-[-100%]"
        }
      >
        <ul className="mt-6">
          <UserList />
          <MenuList />
          <ChatLogList />
        </ul>
      </nav>
    </div>
  );
}
