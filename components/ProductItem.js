import React, { memo } from "react";
import { ResourceList, Stack, TextStyle } from "@shopify/polaris";
import ProductAvatar from "./ProductAvatar";

const monetaryFormat = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  style: "currency",
  maximumSignificantDigits: 2,
});

const ProductItem = ({ product, onClick }) => (
  <ResourceList.Item
    id={product.id}
    media={<ProductAvatar product={product} />}
    onClick={() => onClick(product)}
  >
    <Stack>
      <Stack.Item fill>
        <h3>
          <TextStyle variation="strong">{product.title}</TextStyle>
        </h3>
      </Stack.Item>

      <Stack.Item>
        <p>
          Price range:&nbsp;
          {monetaryFormat.format(
            product.priceRange.minVariantPrice.amount / 100
          )}
          &nbsp;-&nbsp;
          {monetaryFormat.format(
            product.priceRange.maxVariantPrice.amount / 100
          )}
        </p>
      </Stack.Item>
    </Stack>
  </ResourceList.Item>
);

export default memo(ProductItem);
