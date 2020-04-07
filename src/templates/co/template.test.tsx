import React from "react";
import renderer from "react-test-renderer";
import { Template } from "./template";

describe("default template", () => {
  it("matches snapshot", () => {
    const document = {
      id: "A182470ZC43306037",
      $template: {
        name: "CERTIFICATE_OF_ORIGIN",
        type: "EMBEDDED_RENDERER",
        url: "https://demo-co.openattestation.com"
      },
      issuedDate: "2018-01-09",
      issuers: [
        {
          name: "DEMO STORE",
          address: {
            street: "135 DONNYBROOK RD",
            city: "MELBOURNE",
            state: "VICTORIA",
            country: "AUSTRALIA"
          },
          contact: {
            tel: "+61-3-93911627",
            fax: "+61-3-93911687"
          },
          documentStore: "0x9178F546D3FF57D7A6352bD61B80cCCD46199C2d"
        }
      ],
      exporter: {
        name: "FINE RED'S",
        address: {
          street: "90 COLLINS ST",
          city: "MELBOURNE",
          state: "VICTORIA",
          country: "AUSTRALIA"
        }
      },
      producer: {
        name: "PERFECT PINOT LTD",
        address: {
          street: "309 KING ST",
          city: "MELBOURNE",
          state: "VICTORIA",
          country: "AUSTRALIA"
        }
      },
      importer: {
        name: "HUNAN WINES",
        address: {
          street: "EAST JIEFANG ROAD",
          city: "CHANGSHA",
          state: "HUNAN",
          country: "CHINA"
        }
      },
      transport: {
        departureDate: "2018-01-11",
        vehicleNo: "CZ3073/11-JAN",
        loadingPort: "MELBOURNE, AUSTRALIA",
        dischargePort: "HUNAN, CHINA"
      },
      remarks: "",
      items: [
        {
          marks: "",
          description: "16667 CARTONS OF RED WINE",
          hsCode: "220429",
          originCriterion: "WP",
          quantity: {
            value: 5000,
            unit: "LITRES"
          },
          invoiceNo: 24082011,
          invoiceDate: "2018-01-07"
        }
      ]
    };
    const component = renderer.create(<Template document={document} handleObfuscation={() => void 0} />);
    const tree = component.toJSON();
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(tree).toMatchSnapshot();
  });
});
