import Description from "@/components/description";
import InnerHeader from "@/components/innerHeader";
import Template from "@/components/template";
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
        <Link href="/catalogues/201801-V1-카다로그-인창피엠티.pdf" download>
          카달로그 다운로드 하기
        </Link>
        <br />
        Page {pageNumber} of {numPages}
        {pageNumber > 1 && (
          <button onClick={() => setPageNumber((prev) => prev + -1)}>
            이전페이지
          </button>
        )}
        {pageNumber < numPages && (
          <button onClick={() => setPageNumber((prev) => prev + +1)}>
            다음페이지
          </button>
        )}
        <Document
          file="/catalogues/201801-V1-카다로그-인창피엠티.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            //   height={600}
            width={800}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Template>
    </>
  );
}
