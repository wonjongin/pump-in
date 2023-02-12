import Template from "@/components/template";
import Image from "next/image";
import Map from "./map";

export default function Location() {
  return (
    <>
      <Template>
        <a href="http://kko.to/F1J-TRjbxM">
          <Image
            src="/logo/marked_map.jpg"
            alt="map"
            width={600}
            height={600}
            className="mx-auto"
          />
        </a>
        {/* <div className="mx-auto">
            <Map />
          </div> */}
        <br />
        <p className="text-left text-lg max-w-2xl mx-auto">
          🚩 도로명 주소: (22830) 인천광역시 서구 가좌로 54 (주안 BT센터 2차
          411-413호) <br />
          🚩 구 주소: 인천광역시 서구 가좌동 530-3 (주안 BT센터 2차 411-413호)
          <br />
          🚇 지하철: <span className="bg-orange-600 text-white">
            인천2호선
          </span>{" "}
          주안국가산단역 1번출구 <br /> 🚌 버스: 중앙사료 정류장{" "}
          <span className="bg-blue-700 text-white">103</span>,{" "}
          <span className="bg-blue-700 text-white">28</span>,{" "}
          <span className="bg-blue-700 text-white">28-1</span>
          <br />
          🚗 자동차: 인천대로 가좌 IC
        </p>
        <br />
      </Template>
    </>
  );
}
