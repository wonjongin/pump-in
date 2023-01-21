import Template from "@/components/template";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const sites = [
    { name: "회사소개", path: "/introductions/aboutus" },
    { name: "오시는 길", path: "/introductions/location" },
    { name: "취급제품사", path: "/products/links" },
  ];
  return (
    <div className={styles.container}>
      <Template>
        <section className="overflow-hidden bg-[url(https://unsplash.com/photos/LJnRzbDFdI4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHVtcHxlbnwwfHx8fDE2NzA4NDk1NTM&force=true&w=2400)] bg-cover bg-center bg-no-repeat">
          <div className="backdrop-blur-sm backdrop-brightness-75 bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-lg md:max-w-none text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl md:leading-normal mb-8">
                인창피엠티 홈페이지에 오신걸 환영합니다!
              </h2>

              <p className="text-justify max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed md:text-center">
                저희 홈페이지를 방문하신 고객 여러분 진심으로 환영하며 귀사의
                무궁한 발전과 번영을 기원합니다. 저희 인창피엠티는 산업용 펌프,
                모터를 취급, 생산하는 회사로서 급수부스터펌프시스템을 비롯하여
                소방, 순환, 오.배수, 볼텍스, 진공 펌프 등을 취급 판매 및
                수리하고 있습니다. 항상 고객의 입장에서 고객의 마음으로 최선을
                다하겠습니다. 기술자문을 필요로 하시는 분들은 어려워 마시고
                연락을 주시면 언제든지 신속하게 답변해 드리겠습니다. 고객의
                만족을 위하여 최선을 다하는 인창피엠티가 되겠습니다.
                <br />
                <br />
                <div className="text-right">
                  <span className="text-2xl font-bold font-[KorailRoundGothicBold]">
                    인창피엠티
                  </span>{" "}
                  임직원 일동
                </div>
              </p>

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
