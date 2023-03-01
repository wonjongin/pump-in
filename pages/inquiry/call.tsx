import Inquiry from "@/components/inquiry";
import Template from "@/components/template";

export default function AS() {
  return (
    <>
      <Template>
        <a
          className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50 dark:text-black mb-3"
          href="tel:032-574-0479"
        >
          032-574-0479{" "}
          <span aria-hidden="true" role="img">
            ☎️
          </span>
        </a>
      </Template>
    </>
  );
}
