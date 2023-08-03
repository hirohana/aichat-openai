import Link from "next/link";
import { VscComment } from "react-icons/vsc";

import type { ThemeList } from "src/types";
import { MenuIconDetail } from "./IconDetail";

type Props = {
  themeList: ThemeList;
};

export async function ChatLogList({ themeList }: Props) {
  return (
    <ul>
      {themeList.map((themeObj) => (
        <li
          className="flex items-center mt-2 w-full py-2 hover:bg-gray-100"
          key={themeObj.id}
        >
          <MenuIconDetail icon={<VscComment className="mr-2 sm:mr-4" />} />
          <Link href={`/chat/${themeObj.id}`} className="font-semibold">
            {themeObj.theme}
          </Link>
        </li>
      ))}
    </ul>
  );
}
