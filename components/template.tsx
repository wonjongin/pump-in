import Footer from "./footer";
import Header from "./header";

interface TemplateProps {
  children: any;
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <div>
        <Header />
        <main className="dark:bg-neutral-900">{children}</main>
        <Footer />
      </div>
    </>
  );
}
