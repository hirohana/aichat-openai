import Link from "next/link";
import { VscComment } from "react-icons/vsc";

import type { ThemeList } from "src/types";
import { MenuIconDetail } from "./IconDetail";

type Props = {
  themeList: ThemeList;
};

export function ChatLogList({ themeList }: Props) {
  return (
    <ul>
      {themeList.map((theme) => (
        <li
          className="flex items-center mt-2 w-full hover:bg-gray-100"
          key={theme.id}
        >
          <MenuIconDetail icon={<VscComment className="mr-2 sm:mr-4" />} />
          <Link href={`/chat/${theme.id}`} className="font-semibold">
            {theme.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
