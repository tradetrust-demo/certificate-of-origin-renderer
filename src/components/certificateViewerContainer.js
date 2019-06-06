import React, { Component } from "react";

import {
  certificateData
} from "@tradetrust/tradetrust-certificate";
import connectToParent from "penpal/lib/connectToParent";
// import styles from "../certificateViewer.scss";

import CertificateViewer from "./certificateViewer";
import DefaultCert from "./certificateTemplates/default";

const inIframe = () => window.location !== window.parent.location;
const flatten = o => JSON.parse(JSON.stringify(o));

class CertificateViewerContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCertificateChange = this.handleCertificateChange.bind(this);
    this.selectTemplateTab = this.selectTemplateTab.bind(this);
    this.state = { parentFrameConnection: null, document: null, tabIndex: 0 };
  }

  componentDidUpdate() {
    
    if (inIframe()) {
      this.state.parentFrameConnection.promise.then(parent => {
        if (parent.updateHeight) {
          parent.updateHeight(document.documentElement.scrollHeight);
        }
        if (parent.updateTemplates)
          parent.updateTemplates(flatten([
            {
              id: "certificate",
              label: "Certificate",
              template: DefaultCert
            }, {
              id: "transcript",
              label: "Transcript",
              template: DefaultCert
            }
          ]));
      });
    }
  }

  componentDidMount() {
    // const { selectTemplateTab } = this.props;
    // const getTemplates = () => flatten(this.props.templates);
    const renderCertificate = this.handleCertificateChange;
    const selectTemplateTab = this.selectTemplateTab;
    const frameHeight = document.documentElement.scrollHeight;

    window.opencerts = {
      // getTemplates,
      renderCertificate,
      selectTemplateTab
    };

    if (inIframe()) {
      const parentFrameConnection = connectToParent({
        methods: {
          renderCertificate,
          selectTemplateTab,
          // getTemplates,
          frameHeight
        }
      });
      this.setState({ parentFrameConnection });
    }
  }

  // handleTextFieldChange(e) {
  //   const fieldContents = JSON.parse(e.target.value);
  //   trace(fieldContents);
  //   const validated = validateSchema(fieldContents);
  //   if (!validated) {
  //     throw new Error(
  //       "Certificate string does not conform to OpenCerts schema"
  //     );
  //   }
  //   const verified = verifySignature(fieldContents);
  //   trace(`Certificate verification: ${verified}`);
  //   this.props.updateCertificate(fieldContents);
  // }

  selectTemplateTab(idx) {
    console.log(idx);
    this.setState({tabIndex: idx})
  }

  handleCertificateChange(certificate) {
    this.setState({document: certificate});
  }

  render() {
    if (!this.state.document) {
      return null;
    }
    return (
      <CertificateViewer
        // id={styles["frameless-container"]}
        document={this.state.document}
        certificate={certificateData(this.state.document)}
      />
    );
  }
}
export default CertificateViewerContainer;
