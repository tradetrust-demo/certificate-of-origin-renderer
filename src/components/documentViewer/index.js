import React from "react";
import PropTypes from "prop-types";
import Templates from "../documentTemplates/default";

const DocumentViewer = props => {
  const { tabIndex, document } = props;
  const Template = Templates[tabIndex].template;

  return <Template document={document} />;
};

DocumentViewer.propTypes = {
  document: PropTypes.object.isRequired,
  tabIndex: PropTypes.number
};

export default DocumentViewer;
