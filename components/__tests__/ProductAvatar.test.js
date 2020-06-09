import React from "react";
import { Avatar } from "@shopify/polaris";
import mount from "../../test/mount";
import ProductAvatar from "../ProductAvatar";

describe("<ProductAvatar />", () => {
  it("product has no images", () => {
    const expectedProduct = {
      title: "Product 1",
      images: {
        edges: [],
      },
    };

    const component = mount(<ProductAvatar product={expectedProduct} />);

    expect(component).toContainReactComponent(Avatar, {
      name: expectedProduct.title,
      source: null,
      accessibilityLabel: null,
    });
  });

  it("product has 2 images", () => {
    const expectedProduct = {
      title: "Product 1",
      images: {
        edges: [
          {
            node: {
              originalSrc: "Source 1",
              altText: "Text 1",
            },
          },
          {
            node: {
              originalSrc: "Source 2",
              altText: "Text 2",
            },
          },
        ],
      },
    };

    const component = mount(<ProductAvatar product={expectedProduct} />);

    expect(component).toContainReactComponent(Avatar, {
      name: expectedProduct.title,
      source: "Source 1",
      accessibilityLabel: "Text 1",
    });
  });
});
