import Template from "@/components/template";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const sites = [
    { name: "회사소개", path: "/introductions/aboutus" },
    { name: "오시는 길", path: "/introductions/location" },
    { name: "펌프사", path: "/products/links" },
  ];
  return (
    <div className={styles.container}>
      <Template noInnerHeader noDescription>
        <section className="overflow-hidden bg-[url(https://unsplash.com/photos/LJnRzbDFdI4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHVtcHxlbnwwfHx8fDE2NzA4NDk1NTM&force=true&w=2400)] bg-cover bg-center bg-no-repeat">
          <div className="backdrop-blur-sm backdrop-brightness-75 bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-lg md:max-w-none text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl md:leading-normal mb-8">
                인창피엠티 홈페이지에 오신걸 환영합니다!
              </h2>
              <div>
                <p className="text-2xl text-white">
                  안녕하십니까! 저희는 <br />
                  펌프모터 전문기업 <br />
                  <span className="font-[KorailRoundGothicBold] font-bold">
                    인창피엠티
                  </span>{" "}
                  입니다.
                </p>
              </div>

              {sites.map((site, idx, arr) => {
                return (
                  <div
                    key={idx}
                    className="mt-4 sm:mt-8 md:inline-block md:mr-4"
                  >
                    <Link
                      href={site.path}
                      className="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                    >
                      <span className="text-sm font-medium"> {site.name} </span>

                      <svg
                        className="ml-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Template>
    </div>
  );
}
