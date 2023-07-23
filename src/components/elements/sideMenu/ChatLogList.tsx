type Props = {
  themeIdList: Array<string>;
};

export function ChatLogList({ themeIdList }: Props) {
  return (
    <div>
      <ul>
        {themeIdList.map((themeId) => (
          <li key={themeId} className="font-semibold">
            themeId: {themeId}
          </li>
        ))}
      </ul>
    </div>
  );
}
