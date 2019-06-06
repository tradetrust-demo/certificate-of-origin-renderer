import React from "react";
import PropTypes from "prop-types";
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

  return <Template document={document} />;
};

CertificateViewer.propTypes = {
  document: PropTypes.object.isRequired
};

export default CertificateViewer;
