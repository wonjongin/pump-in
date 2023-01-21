import Link from "next/link";

export default function Ready() {
  return (
    <>
      <div className="grid h-screen px-4 bg-white dark:bg-neutral-900 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">준비중</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            앗!
          </p>

          <p className="mt-4 text-gray-500">이 페이지는 아직 준비중 입니다.</p>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}
