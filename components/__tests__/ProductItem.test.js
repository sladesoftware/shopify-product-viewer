import React from "react";
import mount from "../../test/mount";
import ProductItem from "../ProductItem";
import { ResourceList } from "@shopify/polaris";

describe("<ProductItem />", () => {
  it("clicking on the item calls onClick()", () => {
    let expectedProduct = {
      id: "Test Id",
      title: "Test Title",
      images: {
        edges: [],
      },
      priceRange: {
        minVariantPrice: {
          amount: 100,
        },
        maxVariantPrice: {
          amount: 100,
        },
      },
    };

    let actualProduct;

    const component = mount(
      <ProductItem
        product={expectedProduct}
        onClick={(product) => (actualProduct = product)}
      />
    );

    component.find(ResourceList.Item).trigger("onClick");

    expect(actualProduct).toBeTruthy();
    expect(actualProduct.id).toBe(expectedProduct.id);
  });
});
