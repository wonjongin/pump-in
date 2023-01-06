import Footer from "@/components/footer";
import Header from "@/components/header";
import Map from "./map";

export default function Location() {
  return (
    <>
      <Header />
      인천광역시 서루 가좌로 54 (주안 BT센터 2차 411-413호)
      <div className="mx-auto">
        <Map />
      </div>
      <Footer />
    </>
  );
}
