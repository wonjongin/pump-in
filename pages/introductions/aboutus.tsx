import Description from "@/components/description";
import InnerHeader from "@/components/innerHeader";
import Template from "@/components/template";
import { CSSProperties } from "react";

export default function AboutUs() {
  const tableStyle: CSSProperties = {
    padding: "10px",
    borderBottom: "1px",
    borderColor: "white",
  };
  const tableData = [
    { key: "기업명", value: "인창피엠티" },
    { key: "업종", value: "일반목적용 기계 제조업" },
    {
      key: "주요 사업	",
      value: "펌프제어 판넬제작, 산업용 펌프, 모터 도소매 및 유지관리, 수리 등",
    },
    {
      key: "회사 주소",
      value: "(22830) 인천광역시 서구 가좌로 54, 주안비티센터2차 411~413호",
    },
    { key: "근로자수	", value: "총 4명" },
  ];

  return (
    <>
      <Template>
        <InnerHeader parentName="회사소개" childName="회사소개" />
        <Description>
          <p className="text-justify max-w-md dark:text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed md:text-center mx-auto">
            저희 홈페이지를 방문하신 고객 여러분 진심으로 환영하며 귀사의 무궁한
            발전과 번영을 기원합니다. 저희 인창피엠티는 산업용 펌프, 모터를
            취급, 생산하는 회사로서 급수부스터펌프시스템을 비롯하여 소방, 순환,
            오.배수, 볼텍스, 진공 펌프 등을 취급 판매 및 수리하고 있습니다. 항상
            고객의 입장에서 고객의 마음으로 최선을 다하겠습니다. 기술자문을
            필요로 하시는 분들은 어려워 마시고 연락을 주시면 언제든지 신속하게
            답변해 드리겠습니다. 고객의 만족을 위하여 최선을 다하는 인창피엠티가
            되겠습니다.
            <br />
            <br />
            <div className="text-right">
              <span className="text-2xl font-bold font-[KorailRoundGothicBold]">
                인창피엠티
              </span>{" "}
              임직원 일동
            </div>
            <br />
            <br />
          </p>
          <table className="mx-auto border border-black dark:border-white border-collapse my-5">
            <thead>
              <tr>
                <th
                  className="border-b border-black dark:border-white"
                  colSpan={2}
                >
                  기업 정보
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ key, value }, idx) => {
                const commonClassName =
                  "p-3 border-b border-black dark:border-white";
                return (
                  <tr key={idx}>
                    <td className={`${commonClassName} pr-5`}>{key}</td>
                    <td className={`${commonClassName}`}>{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Description>
      </Template>
    </>
  );
}
