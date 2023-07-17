import { menuList } from "./const/menuList";

export function MenuList() {
  return (
    <>
      {menuList.map((menu) => (
        <li
          key={menu.key}
          className={`${menu.key === "ログアウト" ? "border-b" : ""}`}
        >
          {menu.element}
        </li>
      ))}
    </>
  );
}
