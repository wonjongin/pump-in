import InnerHeader from "@/components/innerHeader";
import Template from "@/components/template";
import Link from "next/link";
import Links from "./links.json";
import Links_sujung from "./links_sujung.json";

export default function AboutUs() {
  return (
    <>
      <Template>
        <InnerHeader parentName="취급제품사" childName="일반펌프" />
        <div className="mx-auto">
          {Links.map((link, idx, arr) => {
            return (
              <div key={idx} className="mt-4 sm:mt-8 md:inline-block md:mr-4">
                <Link
                  href={link.url}
                  className="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                >
                  <span className="text-sm font-medium"> {link.name} </span>

                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
          <div className="text-lg">수중펌프 전문</div>
          {Links_sujung.map((link, idx, arr) => {
            return (
              <div key={idx} className="mt-4 sm:mt-8 md:inline-block md:mr-4">
                <Link
                  href={link.url}
                  className="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                >
                  <span className="text-sm font-medium"> {link.name} </span>

                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </Template>
    </>
  );
}
