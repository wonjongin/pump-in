import IconCard from "@/components/iconCard";
import Template from "@/components/template";
import Links from "../../data/links.json";

export default function AboutUs() {
  return (
    <>
      <Template>
        {Links.map((link, idx, arr) => {
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
