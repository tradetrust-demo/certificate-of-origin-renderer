import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
const QRCode = require("qrcode.react");

const qrCodeStyle = {
  textAlign: "center",
  marginTop: 20
};

const QrCode = ({ document }) => (
  <div className="container p-2" style={qrCodeStyle}>
    {get(document, "documentUrl") ? (
      <QRCode value={`${get(document, "documentUrl")}`} />
    ) : null}
  </div>
);

export default QrCode;

QrCode.propTypes = {
  document: PropTypes.object.isRequired
};
