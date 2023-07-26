import Link from "next/link";
import { AiFillRead } from "react-icons/ai";
import { IconContext } from "react-icons";

import type { ThemeList } from "src/types";

type Props = {
  themeList: ThemeList;
};

export function ChatLogList({ themeList }: Props) {
  return (
    <ul>
      {themeList.map((theme) => (
        <li className="flex items-center mt-2" key={theme.id}>
          <IconContext.Provider value={{ color: "#AAAAAA", size: "20px" }}>
            <AiFillRead className="mr-1" />
          </IconContext.Provider>
          <Link href={`/chat/${theme.id}`} className="font-semibold">
            {theme.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
