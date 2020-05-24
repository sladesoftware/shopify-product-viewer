import { memo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Banner, Stack, Spinner } from "@shopify/polaris";

const monetaryFormat = new Intl.NumberFormat("en-GB", {
  currency: "GBP",
  style: "currency",
  maximumSignificantDigits: 2,
});

const GET_PRODUCT_VARIANTS = gql`
  query getProductVariants($productId: ID!) {
    product(id: $productId) {
      id
      variants(first: 10) {
        edges {
          node {
            id
            image {
              transformedSrc(maxWidth: 100)
            }
            price
            title
          }
        }
      }
    }
  }
`;

const ProductVariants = ({ productId }) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_VARIANTS, {
    variables: {
      productId,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Banner status="critical">{error.message}</Banner>;
  }

  const variants = (
    (data &&
      data.product &&
      data.product.variants &&
      data.product.variants.edges) ||
    []
  ).map((edge) => edge.node);

  return (
    <>
      {variants.map((variant, index) => (
        <Stack key={index} vertical={false}>
          <Stack.Item>
            <img
              width="100%"
              height="100%"
              src={variant.image && variant.image.transformedSrc}
            />
          </Stack.Item>

          <Stack.Item fill>{variant.title}</Stack.Item>

          <Stack.Item>{monetaryFormat.format(variant.price)}</Stack.Item>
        </Stack>
      ))}
    </>
  );
};

export default memo(ProductVariants);
