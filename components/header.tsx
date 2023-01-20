import Image from "next/image";
import Link from "next/link";

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
          <div className="flex flex-wrap h-16 items-center justify-around">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 dark:text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image
                  src="/imgs/logo-h-black-302x91.png"
                  alt="home"
                  width={200}
                  height={50}
                  className="border-0 max-md:hidden dark:hidden"
                />
                <Image
                  src="/imgs/logo-h-all-white-302x91.png"
                  alt="home"
                  width={200}
                  height={50}
                  className="border-0 max-md:hidden hidden dark:inline-block"
                />
                <Image
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
                />
              </Link>
            </div>

            <div className="md:block">
              <nav aria-label="Site Nav">
                <ul className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                  {menus.map((menu, idx, arr) => {
                    return (
                      <li key={idx}>
                        <Link
                          className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                          href={menu.path}
                        >
                          {menu.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
