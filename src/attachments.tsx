import React, { FunctionComponent, useState } from "react";
import { Attachment, Renderer } from "@govtechsg/decentralized-renderer-react-components";
import { get, times } from "lodash";
import { Document, Page, pdfjs } from "react-pdf";
import QRCode from "qrcode.react";

// TODO check this https://github.com/wojtekmaj/react-pdf#browserify-and-others
// TODO imported from "@govtechsg/decentralized-renderer-react-components" => need to export from the lib ? be careful on the size on the bundle
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PdfRenderer: FunctionComponent<Renderer> = ({ attachment }) => {
  const [numberOfPages, setNumberOfPages] = useState(0);

  return (
    <Document
      file={`data:application/pdf;base64,${attachment.data}`}
      onLoadSuccess={({ numPages }) => {
        setNumberOfPages(numPages);
      }}
    >
      <style
        scoped
        dangerouslySetInnerHTML={{
          __html: `
      canvas {
        margin: auto;
      }
    `
        }}
      />
      {times(numberOfPages, index => (
        // TODO: Dynamically resize width to fit container
        // https://github.com/wojtekmaj/react-pdf/issues/129
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export function fullAttachmentRenderer<D extends Document>(attachment: Attachment): React.FunctionComponent {
  if (attachment.type === "application/pdf") {
    // eslint-disable-next-line react/display-name
    return () => (
      <>
        <PdfRenderer attachment={attachment} />
        <div
          className="container p-2"
          style={{
            textAlign: "center",
            marginTop: 20
          }}
        >
          {get(document, "documentUrl") ? <QRCode value={`${get(document, "documentUrl")}`} /> : null}
        </div>
      </>
    );
  }

  // TODO would be better to not have to handle this case, improvement to be done in the lib
  // eslint-disable-next-line react/display-name
  return () => (
    <div>
      <h2>Rendering of this type of attachment is not supported.</h2>
      <p>Please check your mime-type: {attachment.type}</p>
    </div>
  );
}
