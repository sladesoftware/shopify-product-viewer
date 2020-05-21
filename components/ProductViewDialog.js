import { memo } from "react";
import { Modal } from "@shopify/polaris";

const ProductViewDialog = ({ open, onClose, product }) => (
  <Modal
    open={open}
    onClose={onClose}
    title={`Viewing ${product.title}`}
    primaryAction={{
      content: "Close",
      onAction: onClose,
    }}
  >
    <Modal.Section>
      <div>TODO</div>
    </Modal.Section>
  </Modal>
);

export default memo(ProductViewDialog);
