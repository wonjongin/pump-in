import { useRouter } from "next/router";
import Description from "./description";
import Footer from "./footer";
import Header from "./header";
import InnerHeader from "./innerHeader";
import { data } from "../data/sitemaps";
import Head from "next/head";

interface TemplateProps {
  children: any;
  noDescription?: boolean;
  noInnerHeader?: boolean;
}

export default function Template({
  children,
  noDescription,
  noInnerHeader,
}: TemplateProps) {
  const router = useRouter();
  const path = router.pathname;
  const parentName = data.filter((item, idx, items) => {
    return item.path === path.split("/")[1];
  });
  let childName = "";
  data.map((item, idx, items) => {
    let temp = item.sites.filter((site, idx, sites) => {
      return site.path === path;
    });
    if (temp[0] !== undefined) childName = temp[0].name;
  });

  return (
    <>
      <div>
        <Head>
          <title>인창피엠티</title>
        </Head>
        <Header />
        {noInnerHeader ? (
          ""
        ) : (
          <InnerHeader parentName={parentName[0].name} childName={childName} />
        )}

        <main className="dark:bg-neutral-900">
          {noDescription ? children : <Description>{children}</Description>}
        </main>
        <Footer />
      </div>
    </>
  );
}
