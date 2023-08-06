import Link from "next/link";
import { VscComment, VscTrash } from "react-icons/vsc";

import type { ThemeList } from "src/types";
import { MenuIconDetail } from "./IconDetail";
import { SERVER_ERROR_STATUS_CODE_500 } from "src/const";

type Props = {
  themeList: ThemeList;
};

export async function ChatLogList({ themeList }: Props) {
  const deleteChatLog = async (id: string) => {
    let isSuccess = false;

    try {
      const response = await fetch(`/api/chat/${id}`, { method: "DELETE" });
      isSuccess = await response.json();
    } catch (err) {
      window.alert(`${SERVER_ERROR_STATUS_CODE_500}: ${err}`);
    }

    if (!isSuccess) {
      window.alert(SERVER_ERROR_STATUS_CODE_500);
    }
  };

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
          <MenuIconDetail
            icon={
              <VscTrash
                className="ml-2 sm:ml-4 hover:bg-red-200"
                onClick={() => deleteChatLog(themeObj.id)}
              />
            }
          />
        </li>
      ))}
    </ul>
  );
}
