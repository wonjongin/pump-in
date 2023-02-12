interface InnerHeaderProps {
  parentName: string;
  childName: string;
}

export default function InnerHeader(props: InnerHeaderProps) {
  const { parentName, childName } = props;
  const rand = Math.floor(Math.random() * 17);
  const style = {
    backgroundImage: `url(/imgs/parts/p${rand}.png)`,
  } as React.CSSProperties;

  return (
    <>
      <div
        style={style}
        className={`overflow-hidden bg-cover bg-center bg-no-repeat h-60`}
      >
        <div className="backdrop-blur-sm backdrop-brightness-75 bg-black/25">
          <h1 className="text-center text-3xl font-[KorailRoundGothicBold] font-bold py-28 text-white">
            {parentName}
          </h1>
        </div>
      </div>
      <h1 className="text-center text-3xl font-[KorailRoundGothicBold] font-bold py-12">
        {childName}
      </h1>
    </>
  );
}
