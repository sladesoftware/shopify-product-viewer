import { memo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Modal, Banner } from "@shopify/polaris";
import ProductView from "./ProductView";

const GET_PRODUCT_BY_ID = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      title
      description
      tags
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
`;

const ProductViewDialog = ({ open, onClose, productId, productTitle }) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: productId,
    },
  });

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
        <ProductView product={data && data.product} />
      </Modal.Section>
    </Modal>
  );
};

export default memo(ProductViewDialog);
