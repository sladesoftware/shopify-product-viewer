import { memo } from "react";
import { Banner, Card, Stack, TextStyle } from "@shopify/polaris";
import NoImage from "./NoImage";
import Tags from "./Tags";

const ProductView = ({ product }) => {
  if (!product) {
    return <Banner status="critical">Missing product information</Banner>;
  }

  const images = (product.images && product.images.edges) || [];

  return (
    <>
      <Stack vertical>
        <Stack.Item fill>
          {images.length > 1 ? (
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
      </Stack>

      <Card sectioned>
        <Tags tags={product.tags || []} />
      </Card>
    </>
  );
};

export default memo(ProductView);
