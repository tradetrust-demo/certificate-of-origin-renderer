import React from "react";
import PropTypes from "prop-types";

import Templates from "../certificateTemplates/default";
const CertificateViewer = props => {
  const { tabIndex, document } = props;
  const Template = Templates[tabIndex].template;

  return <Template document={document} />;
};

CertificateViewer.propTypes = {
  document: PropTypes.object.isRequired,
  tabIndex: PropTypes.number
};

export default CertificateViewer;
