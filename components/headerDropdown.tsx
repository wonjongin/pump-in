import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface HeaderDropdownProps {
  displayName: string;
  sites: {
    name: string;
    path: string;
  }[];
}

export default function HeaderDropdown(props: HeaderDropdownProps) {
  const { displayName, sites } = props;
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button>{displayName}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="mt-2 focus:outline-none absolute origin-top-right divide-y -right-9 w-32 divide-gray-100 rounded-md bg-blue-300 dark:bg-blue-800 z-10">
          <div>
            {sites.map((site, idx, sites) => (
              <Menu.Item>
                {({ active }) => (
                  <div className="w-full" key={idx}>
                    <Link
                      className={`${
                        active ? "bg-blue-500" : ""
                      } py-2 mx-auto w-full rounded-md inline-block text-center`}
                      href={site.path}
                    >
                      {site.name}
                    </Link>
                  </div>
                )}
              </Menu.Item>
            ))}

            {/* <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
