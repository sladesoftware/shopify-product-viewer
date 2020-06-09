import React, { memo } from "react";
import { Banner, Card, Stack } from "@shopify/polaris";
import NoImage from "./NoImage";
import Tags from "./Tags";

const ProductView = ({ product, children }) => {
  if (!product) {
    return <Banner status="critical">Missing product information</Banner>;
  }

  const images = (product.images && product.images.edges) || [];

  return (
    <Stack vertical spacing="extraTight">
      <Stack.Item>
        {images.length > 0 ? (
          <img
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={images[0].node.originalSrc}
          />
        ) : (
          <NoImage />
        )}
      </Stack.Item>

      <Stack.Item fill>
        <Card title={product.title} sectioned>
          <p>{product.description}</p>
        </Card>
      </Stack.Item>

      {!!children && (
        <Stack.Item>
          <Card sectioned title="Variants">
            {children}
          </Card>
        </Stack.Item>
      )}

      <Stack.Item>
        <Card sectioned title="Tags">
          <Tags tags={product.tags || []} />
        </Card>
      </Stack.Item>
    </Stack>
  );
};

export default memo(ProductView);
