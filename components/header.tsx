import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { slide as HamburgerMenu } from "react-burger-menu";
import HeaderDropdown from "./headerDropdown";
import { data } from "./sitemaps";

export default function Header() {
  const menus = [
    { name: "회사소개", path: "/introductions/aboutus" },
    // { name: "제품", path: "/introductions/aboutus" },
    // { name: "기술자료", path: "/introductions/aboutus" },
    { name: "설치사례", path: "/introductions/aboutus" },
    { name: "문의", path: "/introductions/aboutus" },
    { name: "링크", path: "/introductions/aboutus" },
  ];

  return (
    <>
      <header aria-label="Site Header" className="bg-white dark:bg-neutral-900">
        <div className="mx-auto py-4 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap h-16 items-center md:justify-around">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 dark:text-teal-600" href="/">
                <span className="sr-only">Home</span>

                <Image
                  src="/imgs/logo-h-black-302x91.png"
                  alt="home"
                  width={200}
                  height={50}
                  className="border-0 dark:hidden"
                />
                <Image
                  src="/imgs/logo-h-all-white-302x91.png"
                  alt="home"
                  width={200}
                  height={50}
                  className="border-0 hidden dark:inline-block"
                />
                {/* <Image
                  src="/imgs/logo-only-nobg.png"
                  alt="home"
                  width={50}
                  height={50}
                  className="border-0 md:hidden dark:hidden"
                />
                <Image
                  src="/imgs/logo-only-gray-nobg-256x256.png"
                  alt="home"
                  width={50}
                  height={50}
                  className="border-0 md:hidden hidden dark:inline-block"
                /> */}
              </Link>
            </div>

            <div className="md:block max-md:hidden">
              <nav aria-label="Site Nav">
                <ul className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                  {data.map((col, idx, cols) => (
                    <HeaderDropdown
                      key={idx}
                      displayName={col.name}
                      sites={col.sites}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="md:hidden">
              <HamburgerMenu
                customBurgerIcon={<Bars3Icon />}
                right
                width={"60%"}
                className="right-0 top-0 md:hidden"
                // crossButtonClassName=""
                crossClassName="w-9 h-9"
                menuClassName="bg-white dark:bg-neutral-900"
              >
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5">
                  {data.map((col, idx, arr) => {
                    return (
                      <div key={idx} className="mb-4">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {col.name}
                        </p>

                        <nav
                          aria-label={`Footer Navigation - ${col.name}`}
                          className="mt-6"
                        >
                          <ul className="space-y-4 text-sm">
                            {col.sites.map((row, idx, arr) => {
                              return (
                                <li key={idx}>
                                  <Link
                                    href={row.path}
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                  >
                                    {row.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>
                      </div>
                    );
                  })}
                </div>
              </HamburgerMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
