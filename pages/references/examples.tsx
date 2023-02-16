import Template from "@/components/template";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Catalogue() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
      <Template>
        <Link
          href="/catalogues/202101-V1-카다로그-설치사례.pdf"
          download
          className="mx-12 md:mx-32 lg:mx-60 text-center border p-4 rounded-xl block"
        >
          <ArrowDownTrayIcon className="w-8 inline-block mr-4" />
          시공사례 다운로드 하기
        </Link>
        <br />
        <br />
        <br />
        <Document
          file="/catalogues/202101-V1-카다로그-설치사례.pdf"
          className="mx-auto"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {/* <Page
            //   height={600}
            width={800}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          /> */}

          {Array.from(Array(5).keys()).map((i, idx, is) => {
            if (i == 0) return;
            return (
              <div key={idx}>
                <Page
                  className="hidden md:inline-block"
                  // height={600}
                  width={800}
                  pageNumber={i}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                <Page
                  className="md:hidden"
                  // height={600}
                  width={320}
                  pageNumber={i}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            );
          })}
        </Document>
      </Template>
    </>
  );
}
