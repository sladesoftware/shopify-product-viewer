import { memo } from "react";
import { Banner, Card, Stack } from "@shopify/polaris";
import Tags from "./Tags";

const ProductView = ({ product }) => {
  if (!product) {
    return <Banner status="critical">Missing product information</Banner>;
  }

  console.log(product);

  return (
    <>
      <Stack>
        <Stack.Item>
          <img
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={product.images.edges[0].node.originalSrc}
          />
        </Stack.Item>

        <Stack.Item>
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
