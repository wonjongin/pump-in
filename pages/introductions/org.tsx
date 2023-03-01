import Template from "@/components/template";
import Image from "next/image";

export default function Org() {
  return (
    <>
      <Template>
        <Image
          alt="org chart"
          src="/imgs/org/org.png"
          width={500}
          height={500}
          className="mx-auto"
        />
      </Template>
    </>
  );
}
