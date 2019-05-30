import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Template = ({ certificate }) => (
  <>
    <div className="d-flex flex-row-reverse my-5">
      Dated: {format(certificate.issuedOn, "DD/MM/YYYY")}
    </div>
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
          <td>Name</td>
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
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col" colSpan="2">
            Recipient Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
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
  </>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
