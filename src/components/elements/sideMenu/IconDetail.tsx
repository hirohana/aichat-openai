import { ReactNode } from "react";
import { IconContext } from "react-icons";

type Props = {
  icon: ReactNode;
};

export function MenuIconDetail({ icon }: Props) {
  return (
    <IconContext.Provider value={{ color: "#666666", size: "20px" }}>
      {icon}
    </IconContext.Provider>
  );
}
