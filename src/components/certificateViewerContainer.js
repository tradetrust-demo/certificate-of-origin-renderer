import React, { Component } from "react";

import connectToParent from "penpal/lib/connectToParent";
import CertificateViewer from "./certificateViewer";
import Templates from "./certificateTemplates/default";
import "./certificateViewerContainer.css";
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
        if (parent.updateTemplates) parent.updateTemplates(flatten(Templates));
      });
    }
  }

  componentDidMount() {
    const renderCertificate = this.handleCertificateChange;
    const selectTemplateTab = this.selectTemplateTab;
    const frameHeight = document.documentElement.scrollHeight;

    window.opencerts = {
      renderCertificate,
      selectTemplateTab
    };

    if (inIframe()) {
      const parentFrameConnection = connectToParent({
        methods: {
          renderCertificate,
          selectTemplateTab,
          frameHeight
        }
      });
      this.setState({ parentFrameConnection });
    }
  }

  selectTemplateTab(idx) {
    this.setState({ tabIndex: idx });
  }

  handleCertificateChange(doc) {
    this.setState({ document: doc });
  }

  render() {
    if (!this.state.document) {
      return null;
    }
    return (
      <div className="container cert-border">
        <CertificateViewer
          document={this.state.document}
          tabIndex={this.state.tabIndex}
        />
      </div>
    );
  }
}
export default CertificateViewerContainer;
