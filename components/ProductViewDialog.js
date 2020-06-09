import React, { memo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Modal, Banner } from "@shopify/polaris";
import createApp from "@shopify/app-bridge";
import { Redirect } from "@shopify/app-bridge/actions";
import Cookies from "js-cookie";
import ProductView from "./ProductView";
import ProductVariants from "./ProductVariants";

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
      secondaryActions={[
        {
          content: "Edit product",
          onAction() {
            const app = createApp({
              apiKey: API_KEY,
              shopOrigin: Cookies.get("shopOrigin"),
            });

            const redirect = Redirect.create(app);
            redirect.dispatch(Redirect.Action.ADMIN_SECTION, {
              name: Redirect.ResourceType.Product,
              resource: {
                id: productId.split("/").pop(),
              },
            });
          },
        },
      ]}
      loading={loading}
    >
      {!!error && <Banner status="critical">{error.message}</Banner>}

      <Modal.Section>
        <ProductView product={data && data.product}>
          <ProductVariants productId={productId} />
        </ProductView>
      </Modal.Section>
    </Modal>
  );
};

export default memo(ProductViewDialog);
