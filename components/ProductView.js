import { memo } from "react";
import { Banner } from "@shopify/polaris";

const ProductView = ({ product }) => {
  if (!product) {
    return <Banner status="critical">Missing product information</Banner>;
  }

  return <div>TODO: {product.title}</div>;
};

export default memo(ProductView);
