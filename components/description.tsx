interface DescriptionProps {
  children: any;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <>
      <div className="md:mx-auto md:mx-24 mx-8">{children}</div>
    </>
  );
}
