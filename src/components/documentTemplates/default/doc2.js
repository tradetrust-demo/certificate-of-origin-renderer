import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Doc2 = ({ document }) => (
  <>
    <h2 style={{ padding: 10, textAlign: "center" }}>
      <u>Certificate of Non Manipulation</u>
    </h2>
    <div className="d-flex flex-row-reverse my-5">
      Dated: {format(document.issuedOn, "DD/MM/YYYY")}
    </div>
    <h2 style={{ margin: 10 }}>
      This is to certify that the below stated information is correct and
      accounted.
    </h2>
    <div className="d-flex">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Issuer Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "20%" }}>Name</td>
            <td>{document.issuers[0].name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{document.issuers[0].address}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{document.issuers[0].country}</td>
          </tr>
        </tbody>
      </table>
      <table
        className="table table-hover table-bordered"
        style={{ marginLeft: 10 }}
      >
        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Recipient Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "20%" }}>Name</td>
            <td>{document.recipient.name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{document.recipient.address}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{document.recipient.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col" colSpan="2">
            Shipment Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: "20%" }}>Name</td>
          <td>{document.recipient.name}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{document.recipient.address}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{document.recipient.country}</td>
        </tr>
      </tbody>
    </table>
  </>
);

Doc2.propTypes = {
  document: PropTypes.object.isRequired
};
export default Doc2;
