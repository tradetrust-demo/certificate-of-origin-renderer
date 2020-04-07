import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";
import { fullAttachmentRenderer } from "./attachments";

ReactDOM.render(
  <FramedDocumentRenderer templateRegistry={registry} attachmentToComponent={fullAttachmentRenderer} />,
  document.getElementById("root")
);
