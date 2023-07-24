import Link from "next/link";
import type { ThemeList } from "src/types";

type Props = {
  themeList: ThemeList;
};

export function ChatLogList({ themeList }: Props) {
  return (
    <ul>
      {themeList.map((theme) => (
        <li key={theme.id}>
          <Link href={`/chat/${theme.id}`} className="font-semibold">
            {theme.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
