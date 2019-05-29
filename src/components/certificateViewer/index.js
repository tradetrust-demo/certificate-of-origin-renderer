import React from "react";
// import { get } from "lodash";

// import { getLogger } from "../../utils/logger";
import Template from "../certificateTemplates/default";

// const { trace } = getLogger("components:CertificateViewer");

const CertificateViewer = props => {
  const { certificate, document } = props;

//   const selectedTemplateName = get(certificate, "$template", "default");
//   const SelectedTemplate = templates[selectedTemplateName] || templates.default;

//   trace(`Templates Mapping: %o`, templates);
//   trace(`Selected template: ${selectedTemplateName}`);
//   trace(`Certificate content: %o`, certificate);

  return <Template document={document}
  certificate={certificate} />;
};


export default CertificateViewer;
