import IconCard from "@/components/iconCard";
import Template from "@/components/template";
import Links_sujung from "../../data/links_sujung.json";

export default function AboutUs() {
  return (
    <>
      <Template>
        {Links_sujung.map((link, idx, arr) => {
          return (
            <div key={idx} className="mt-4 sm:mt-8 inline-block mr-8">
              <IconCard url={link.url} name={link.name} logoPath="" />
            </div>
          );
        })}
      </Template>
    </>
  );
}
