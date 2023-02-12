import Header from "@/components/header";
import Footer from "@/components/footer";
import Template from "@/components/template";
import InnerHeader from "@/components/innerHeader";
import Description from "@/components/description";

export default function History() {
  const histories = [
    {
      at: "2013.07.01",
      desc: "인창피엠티 개업",
    },
    {
      at: "2023.01.12",
      desc: "우수대리점 표창장 수상",
    },
  ];
  return (
    <>
      <Template>
        <InnerHeader parentName="회사소개" childName="연혁" />
        <Description>
          <ul>
            {histories.map((history, idx, histories) => (
              <li key={idx} className="text-lg font-[KorailRoundGothic]">
                {history.at} {history.desc}
              </li>
            ))}
          </ul>
        </Description>
      </Template>
    </>
  );
}
