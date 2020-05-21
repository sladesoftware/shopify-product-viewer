import { memo } from "react";
import { Avatar } from "@shopify/polaris";

const ProductImage = ({ product }) => {
  const images = product.images.edges || [];
  const image = images.length === 0 ? null : images[0].node;

  return (
    <Avatar
      customer
      size="medium"
      name={product.title}
      source={image && image.originalSrc}
      accessibilityLabel={image && image.altText}
    />
  );
};

export default memo(ProductImage);
