import Template from "@/components/template";
import Image from "next/image";


export default function AS() {
  return (
    <>
      <Template>
        <a
          className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50 dark:text-black mb-3 md:hidden"
          href="tel:032-574-0479"
        >
          032-574-0479{" "}
          <span aria-hidden="true" role="img">
            ☎️
          </span>
        </a>
        <p className="mx-auto text-center mt-8 mb-8 text-2xl md:hidden">위 버튼을 누르시면 전화연결이 됩니다!</p>
        <Image src="/qrs/call.png" width={360} height={360} alt="Call to 032-574-0479" className="mx-auto"/>
        <p className="mx-auto text-center mt-8 text-2xl">휴대폰에서 QR코드를 찍으시면 전화연결이 됩니다!</p>
      </Template>
    </>
  );
}
