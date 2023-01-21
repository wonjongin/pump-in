import Template from "@/components/template";
import Image from "next/image";
import Map from "./map";

export default function Location() {
  return (
    <>
      <Template>
        <div className="w-screen">
          <Map />
          <br />
          <h1 className="text-center text-4xl">오시는 길</h1>
          <br />
          <a href="http://kko.to/F1J-TRjbxM">
            <Image
              src="/imgs/map.png"
              alt="map"
              width={500}
              height={500}
              className="mx-auto"
            />
          </a>
          <p className="text-center">
            인천광역시 서구 가좌로 54 (주안 BT센터 2차 411-413호)
          </p>
          <br />
        </div>
      </Template>
    </>
  );
}
