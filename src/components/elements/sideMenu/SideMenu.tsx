type Props = {
  isOpen: boolean;
  menuList: Array<{
    key: string;
    image: string;
    element: JSX.Element;
  }>;
};

export function SideMenu({ isOpen, menuList }: Props) {
  return (
    <div>
      <nav
        className={
          isOpen
            ? "fixed right-0 w-48 h-screen bg-white pt-8 px-3"
            : "fixed right-[-100%]"
        }
      >
        <ul className="mt-6">
          {menuList.map((menu) => (
            <li key={menu.key}>{menu.element}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
