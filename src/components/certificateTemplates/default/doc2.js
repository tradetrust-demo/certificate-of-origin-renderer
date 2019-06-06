import React, { Component } from "react";
// import { get } from "lodash";
import PropTypes from "prop-types";
// import ObfuscatableValue from "template-commons/Privacy/ObfuscatableValue";
// import { formatDate } from "./common/functions";
// import { transcriptBg } from "./common/backgrounds";
// import css from "./common/demoStyles.scss";

class Doc2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { editable } = this.state;
    // const { certificate, handleObfuscation } = this.props;
    // const certificateName = get(certificate, "name");
    // const certificateId = get(certificate, "id");
    // const issuanceDate = get(certificate, "issuedOn");
    // const admissionDate = get(certificate, "admissionDate");
    // const graduationDate = get(certificate, "graduationDate");

    // const recipientName = get(certificate, "recipient.name");
    // const recipientNric = get(certificate, "recipient.nric");
    // const recipientCourse = get(certificate, "recipient.course");
    // const studentId = get(certificate, "additionalData.studentId");

    // const transcriptData = get(certificate, "transcript", []);


    return (
      <div className="container">
        <div
          className="p-2 container"
          style={{
            backgroundRepeat: "repeat"
          }}
        >
          <div className={`row ${"title"}`} style={{ paddingLeft: "3%" }}>
            {/* <b>{certificateName}</b> */}
          </div>

          <div
            className={`row ${"transcript"}`}
            style={{
              paddingTop: "3%",
              paddingLeft: "2%"
            }}
          >
            <div className="col">
              <div className="row">
                <div className="col">NAME</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {recipientName} */}
                </div>
              </div>
              <div className="row">
                <div className="col">COURSE</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {recipientCourse} */}
                </div>
              </div>
              <div className="row">
                <div className="col">NRIC/FIN</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {recipientNric} */}
                </div>
              </div>
              <div className="row">
                <div className="col">STUDENT ID</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {studentId} */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">CERTIFICATE ID</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {certificateId} */}
                </div>
              </div>
              <div className="row">
                <div className="col">DATE OF ISSUANCE</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {formatDate(issuanceDate)} */}
                </div>
              </div>
              <div className="row">
                <div className="col">DATE OF ADMISSION</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {formatDate(admissionDate)} */}
                </div>
              </div>
              <div className="row">
                <div className="col">DATE OF GRADUATION</div>
                <div className="col">
                  :&nbsp;&nbsp;
                  {/* {formatDate(graduationDate)} */}
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}
Doc2.propTypes = {
  certificate: PropTypes.object.isRequired,
  handleObfuscation: PropTypes.func
};

export default Doc2;
