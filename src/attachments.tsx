import React from "react";
import {
  Attachment,
  PdfRenderer,
  UnsupportedRenderer,
  Document
} from "@govtechsg/decentralized-renderer-react-components";
import { get } from "lodash";
import QRCode from "qrcode.react";

export function fullAttachmentRenderer<D extends Document>(
  attachment: Attachment,
  document: Document
): React.FunctionComponent {
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
  return () => <UnsupportedRenderer attachment={attachment} />;
}
