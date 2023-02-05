import Header from "@/components/header";
import Footer from "@/components/footer";

export default function History() {
  const histories = [
    {
        at: "2009.??.??",
        desc: "인창피엠티 개업"
    },
    {
        at: "2023.01.12",
        desc: "우수대리점 표창장 수상"
    }
  ];
  return (
  <> 
    <Header />
      <div className="mx-auto">
        <ul>
          {histories.map((history, idx, histories)=> (
          
              <li key={idx}>
                {history.at} {history.desc}
              </li>
          
          ))} 
          </ul>
        </div>
      <Footer />
    </>
  );
}