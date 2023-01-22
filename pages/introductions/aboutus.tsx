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
        <div>
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
        </div>
      </Template>
    </>
  );
}
