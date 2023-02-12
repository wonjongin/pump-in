import Image from "next/image";
import Link from "next/link";

interface IconCardProps {
  name: string;
  logoPath: string;
  url: string;
}

export default function IconCard({ name, logoPath, url }: IconCardProps) {
  return (
    <>
      <Link href={url}>
        <div className="rounded-xl border-2 w-32 h-32 hover:border-blue-700 transition ease-in-out duration-500">
          <div className="my-5">
            <Image
              src={logoPath}
              alt="logo"
              width={56}
              height={56}
              className="border-0 mx-auto"
            />
            <h3 className="text-center mt-3 font-[KorailRoundGothicBold]">
              {name}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}
