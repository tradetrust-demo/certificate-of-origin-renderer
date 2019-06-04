import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Template = ({ certificate }) => (
  <>
    <div className="d-flex flex-row-reverse my-5">
      Dated: {format(certificate.issuedOn, "DD/MM/YYYY")}
    </div>
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
            <td>{certificate.issuers[0].name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{certificate.issuers[0].address}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{certificate.issuers[0].country}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-hover table-bordered" style={{marginLeft: 10}}>
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
            <td>{certificate.recipient.name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{certificate.recipient.address}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{certificate.recipient.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
