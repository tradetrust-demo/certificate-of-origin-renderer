import { TemplateProps, TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateOfOriginTemplate } from "./co";
import React from "react";

const DefaultTemplate: React.FunctionComponent<TemplateProps<any>> = ({ document }) => (
  <div className="container">
    <pre>{JSON.stringify(document, null, 2)}</pre>
  </div>
);

export const registry: TemplateRegistry<any> = {
  default: [
    {
      id: "default",
      label: "Default Template",
      template: DefaultTemplate
    }
  ],
  CERTIFICATE_OF_ORIGIN: CertificateOfOriginTemplate,
  NULL: []
};
