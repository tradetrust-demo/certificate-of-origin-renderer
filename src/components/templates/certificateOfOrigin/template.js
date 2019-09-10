import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const QRCode = require("qrcode.react");

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#FFF"
};

const qrCodeStyle = {
  textAlign: "right",
  marginTop: 20
};

const ExporterAndProducer = document => (
  <div className="row">
    <div className="col-12 col-md-6">
      <div className="p-2" style={borderStyle}>
        <div>1. Exporter{"'"}s name, address and country:</div>
        <pre className="p-2">
          <div>{get(document, "exporter.name")}</div>
          <div>{get(document, "exporter.address.street")}</div>
          <div>{`${get(document, "exporter.address.city")}, ${get(
            document,
            "exporter.address.state"
          )}, ${get(document, "exporter.address.country")}`}</div>
        </pre>
      </div>
      <div className="p-2" style={borderStyle}>
        <div>2. Producer{"'"}s name and address (if known):</div>
        <pre className="p-2">
          <div>{get(document, "producer.name")}</div>
          <div>{get(document, "producer.address.street")}</div>
          <div>{`${get(document, "producer.address.city")}, ${get(
            document,
            "producer.address.state"
          )}, ${get(document, "producer.address.country")}`}</div>
        </pre>
      </div>
    </div>
    <div className="col-12 col-md-6" style={borderStyle}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="p-2">Certificate No.: {document.id}</div>
        <div className="align-self-center">
          <div className="text-center p-2">
            <strong>CERTIFICATE OF ORIGIN</strong>
          </div>
          <div className="text-center p-2">
            <strong>Form for China-Australia Free Trade Agreement</strong>
          </div>
        </div>
        <div className="p-2">
          Issued in: {get(document, "issuers[0].address.country")}&nbsp;
        </div>
      </div>
    </div>
  </div>
);

const Importer = document => (
  <div className="row">
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      <div>3. Importer{"'"}s name, address and country (if known):</div>
      <pre className="p-2">
        <div>{get(document, "importer.name")}</div>
        <div>{get(document, "importer.address.street")}</div>
        <div>{`${get(document, "importer.address.city")}, ${get(
          document,
          "importer.address.state"
        )}, ${get(document, "importer.address.country")}`}</div>
      </pre>
    </div>
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      For official use only
    </div>
  </div>
);

const TransportAndPort = document => (
  <div className="row">
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      <div>4. Means of transport and route (if known):</div>
      <div className="p-2">
        <div>
          Departure date: <pre>{get(document, "transport.departureDate")}</pre>
        </div>
        <div>
          Vessel/Flight/Train/Vehicle No.:{" "}
          <pre>{get(document, "transport.vehicleNo")}</pre>
        </div>
        <div>
          Port of loading: <pre>{get(document, "transport.loadingPort")}</pre>
        </div>
        <div>
          Port of discharge:{" "}
          <pre>{get(document, "transport.dischargePort")}</pre>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      Remarks
    </div>
  </div>
);

const LineItems = (item, key) => {
  return (
    <div className="row" key={key}>
      <div className="col-1 p-2" style={borderStyle}>
        {key + 1}
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        {get(item, "mark", "")}
      </div>
      <div className="col-3 p-2" style={borderStyle}>
        {get(item, "description", "")}
      </div>
      <div className="col-1 p-2" style={borderStyle}>
        {get(item, "hscode", "")}
      </div>
      <div className="col-1 p-2" style={borderStyle}>
        {get(item, "originCriterion", "")}
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        {`${get(item, "quantity.value")} ${get(item, "quantity.unit")}`}
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        {`${get(item, "invoiceNo")} ${get(item, "invoiceDate")}`}
      </div>
    </div>
  );
};

const ItemsTransported = document => {
  const content = document.items.map(LineItems);
  return (
    <>
      <div className="row">
        <div className="col-1 p-2" style={borderStyle}>
          6. Item number (max.20)
        </div>
        <div className="col-2 p-2" style={borderStyle}>
          7. Marks and numbers on packages (optional)
        </div>
        <div className="col-3 p-2" style={borderStyle}>
          8. Number and kind of packages; description of goods
        </div>
        <div className="col-1 p-2" style={borderStyle}>
          9. HS code (6-digit code)
        </div>
        <div className="col-1 p-2" style={borderStyle}>
          10. Origin criterion
        </div>
        <div className="col-2 p-2" style={borderStyle}>
          11. Gross or net weight or other quantity (e.g. Quantity Unit, litres,
          m<sup>3</sup>.)
        </div>
        <div className="col-2 p-2" style={borderStyle}>
          12. Invoice number and date
        </div>
      </div>
      {content}
    </>
  );
};

const Declarations = document => (
  <div className="row">
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div>13. Decaration by the exporter or producer</div>
        <div className="p-2">
          The undersigned herby declares that the above-stated information is
          correct and that the goods exported to{" "}
          {get(document, "importer.address.country")} comply with the origin
          requirements specified in the China-Australia Free Trade Agreement.
        </div>
        <div className="p-2">
          <div>
            {`${get(document, "issuers[0].address.city")} ${get(
              document,
              "issuers[0].address.country"
            )} ${get(document, "issuedDate")}`}
          </div>
          <div>Place, date and signature of authorised person</div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 p-2" style={borderStyle}>
      <div className="p-2">14. Certification</div>
      <div className="p-2">
        On the basis of the control carried out, it is hereby certified that the
        information herein is correct and that the described goods comply with
        the origin requirements of the China-Australia Free Trade Agreement.
      </div>
      <div className="p-2">
        <div>
          {`${get(document, "issuers[0].address.city")} ${get(
            document,
            "issuers[0].address.country"
          )} ${get(document, "issuedDate")}`}
        </div>
        <div>Place, date and signature of authorised person</div>
      </div>
      <div className="p-2 row">
        <div className="col-6">
          Tel: {get(document, "issuers[0].contact.tel")}
        </div>
        <div className="col-6">
          Fax: {get(document, "issuers[0].contact.fax")}
        </div>
      </div>
      <div className="p-2">
        <div>Address:</div>
        <div>{get(document, "issuers[0].address.street")}</div>
        <div>{`${get(document, "issuers[0].address.city")} ${get(
          document,
          "issuers[0].address.state"
        )} ${get(document, "issuers[0].address.country")}`}</div>
      </div>
    </div>
  </div>
);

const Template = ({ document }) => (
  <div
    className="container p-2"
    style={{ borderStyle: "solid", borderWidth: 1 }}
  >
    <div className="text-center">CERTIFICATE OF ORIGIN</div>
    <div className="p-2" style={{ backgroundColor: "#e9f0c4", ...borderStyle }}>
      {ExporterAndProducer(document)}
      {Importer(document)}
      {TransportAndPort(document)}
      {ItemsTransported(document)}
      {Declarations(document)}
    </div>
    <div style={qrCodeStyle}>
      {get(document, "documentUrl") && (
        <QRCode value={`${get(document, "documentUrl")}`} />
      )}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
