import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({ pdfUrl, PageNumber }) {
  const [scale, setScale] = useState(1.2);

  const onDocumentLoadSuccess = () => {};

  if (!pdfUrl) {
    return (
      <div className="h-full flex items-center justify-center">
        Select a source document
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setScale(scale - 0.2)}
          className="bg-slate-800 text-white px-4 py-2 rounded"
        >
          Zoom Out
        </button>
      </div>

      <div className="overflow-auto h-[600px]">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={PageNumber}
            scale={scale}
          />
        </Document>
      </div>
    </div>
  );
}

export default PDFViewer;