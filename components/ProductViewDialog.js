import { memo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Modal, Banner } from "@shopify/polaris";
import ProductView from "./ProductView";

const GET_PRODUCT_BY_ID = gql`
  query products($query: String!) {
    products(query: $query, first: 1) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

const ProductViewDialog = ({ open, onClose, productId, productTitle }) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      query: `product_id=${productId}`,
    },
  });

  const product =
    data &&
    data.products &&
    data.products.edges &&
    data.products.edges.length === 1 &&
    data.products.edges[0].node;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Viewing ${productTitle}`}
      primaryAction={{
        content: "Close",
        onAction: onClose,
      }}
      loading={loading}
    >
      {!!error && <Banner status="critical">{error.message}</Banner>}

      <Modal.Section>
        <ProductView product={product} />
      </Modal.Section>
    </Modal>
  );
};

export default memo(ProductViewDialog);
