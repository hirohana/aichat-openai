import { useSelector, useDispatch } from "react-redux";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { menuList } from "src/features/menuList/const/mobileMenuList";
import { menuOpen } from "src/stores/menuOpen/reducer";
import type { Store } from "src/stores/store";

function MenuList() {
  const isOpen = useSelector<Store, boolean>((state) => state.menuOpen.isOpen);
  const dispatch = useDispatch();
  return (
    <Dialog as="div" open={isOpen} onClose={() => dispatch(menuOpen())}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10  w-3/5 sm:max-w-sm overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => dispatch(menuOpen())}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6">{menuList.map((menu) => menu)}</div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export { MenuList };
