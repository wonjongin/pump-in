import Footer from "./footer";
import Header from "./header";

export default function Template({ children }) {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
