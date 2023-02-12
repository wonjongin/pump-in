import Template from "@/components/template";
import { histories } from "data/history";

export default function History() {
  return (
    <>
      <Template>
        <ul>
          {histories.map((history, idx, histories) => (
            <li key={idx} className="text-lg font-[KorailRoundGothic]">
              {history.at} : {history.desc}
            </li>
          ))}
        </ul>
      </Template>
    </>
  );
}
