import { memo, useState } from "react";
import { Heading, Page } from "@shopify/polaris";
import Products from "../components/Products";
import ProductViewDialog from "../components/ProductViewDialog";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Page>
      <Heading>Products</Heading>

      <Products onProductClicked={(product) => setSelectedProduct(product)} />

      {!!selectedProduct && (
        <ProductViewDialog
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </Page>
  );
};

export default memo(Index);
