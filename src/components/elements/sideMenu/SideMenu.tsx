type Props = {
  openMenu: boolean;
  menuList: Array<{
    key: string;
    image: string;
    element: JSX.Element;
  }>;
};

export function SideMenu({ openMenu, menuList }: Props) {
  return (
    <nav
      className={
        openMenu
          ? "fixed bg-white w-40 h-screen pt-8 px-3 "
          : "fixed right-[-100%]"
      }
    >
      <ul className="mt-6">
        {menuList.map((menu) => (
          <li key={menu?.key}>{menu?.element}</li>
        ))}
      </ul>
    </nav>
  );
}
