import { themeList } from "src/types";

type Props = {
  themeList: themeList;
};

export function ChatLogList({ themeList }: Props) {
  return (
    <div>
      <ul>
        {themeList.map((theme) => (
          <li key={theme.id} className="font-semibold">
            themeId: {theme.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
