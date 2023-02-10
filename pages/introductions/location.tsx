import InnerHeader from "@/components/innerHeader";
import Template from "@/components/template";
import Image from "next/image";
import Map from "./map";

export default function Location() {
  return (
    <>
      <Template>
        <InnerHeader parentName="회사소개" childName="연혁" />
        <div className="w-screen">
          <br />
          <h1 className="text-center text-4xl">오시는 길</h1>
          <br />
          <a href="http://kko.to/F1J-TRjbxM">
            <Image
              src="/logo/map.png"
              alt="map"
              width={500}
              height={500}
              className="mx-auto"
            />
          </a>
          {/* <div className="mx-auto">
            <Map />
          </div> */}

          <p className="text-center">
            인천광역시 서구 가좌로 54 (주안 BT센터 2차 411-413호)
          </p>
          <br />
        </div>
      </Template>
    </>
  );
}
