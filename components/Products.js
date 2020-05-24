import { memo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Banner, EmptyState, ResourceList, Spinner } from "@shopify/polaris";
import ProductItem from "./ProductItem";

const GET_PRODUCTS = gql`
  query products {
    products(first: 10) {
      edges {
        node {
          id
          title
          totalVariants
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                altText
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;

const Products = ({ onProductClicked }) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Banner status="critical">{error.message}</Banner>;
  }

  const products = (data.products.edges || []).map((edge) => edge.node);
  if (products.length === 0) {
    return (
      <EmptyState
        heading="No products"
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        There are no products in your Shopify store
      </EmptyState>
    );
  }

  return (
    <ResourceList
      showHeader
      resourceName={{
        singular: "Product",
        plural: "Products",
      }}
      items={products}
      renderItem={(item) => (
        <ProductItem product={item} onClick={onProductClicked} />
      )}
    />
  );
};

export default memo(Products);
