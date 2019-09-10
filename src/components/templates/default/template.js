import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import QrCode from "../qrCode";

const Template = ({ document }) => (
  <div className="container">
    <pre>{JSON.stringify(document, null, 2)}</pre>
    <QrCode document={document} />
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
