import Template from "@/components/template";
import Link from "next/link";

export default function AS() {
  return (
    <>
      <Template>
        <div>
          <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">
                  <p className="max-w-xl text-lg">
                    {/* At the same time, the fact that we are wholly owned and
                    totally independent from manufacturer and other group
                    control gives you confidence that we will only recommend
                    what is right for you. */}
                    AS가 필요하시면 편하게 문의주세요!!
                  </p>

                  <div className="mt-8">
                    <a href="" className="text-2xl font-bold text-pink-600">
                      032-574-0479
                    </a>

                    <address className="mt-2 not-italic">
                      (22830) 인천광역시 서구 가좌로 54 (주안 BT센터 2차
                      411-413호)
                    </address>
                  </div>
                </div>

                <div className="rounded-lg bg-white dark:bg-neutral-700 p-8 shadow-lg lg:col-span-3 lg:p-12">
                  <form action="" className="space-y-4">
                    <div>
                      <label className="sr-only" htmlFor="title">
                        Title
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="제목"
                        type="text"
                        id="title"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          placeholder="이메일 주소"
                          type="email"
                          id="email"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          placeholder="연락처"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="내용"
                        rows={8}
                        id="message"
                      ></textarea>
                    </div>
                    <div>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        type="file"
                        id="file"
                        multiple
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                      >
                        <span className="font-medium"> 문의 보내기 </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-3 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Template>
    </>
  );
}
