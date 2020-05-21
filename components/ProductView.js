import { memo } from "react";
import { Banner, Heading, TextStyle } from "@shopify/polaris";
import ProductImage from "./ProductImage";

const ProductView = ({ product }) => {
  if (!product) {
    return <Banner status="critical">Missing product information</Banner>;
  }

  return (
    <>
      <ProductImage product={product} />

      <Heading>{product.title}</Heading>
      <TextStyle>{product.description}</TextStyle>
    </>
  );
};

export default memo(ProductView);
