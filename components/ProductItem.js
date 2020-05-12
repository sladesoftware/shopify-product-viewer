import { memo } from "react"
import { ResourceList, Stack, TextStyle } from "@shopify/polaris"

const ProductItem = ({ product }) => (
  <ResourceList.Item
    id={product.id}
    media={<ProductImage product={product} />}
  >
    <Stack>
      <Stack.Item fill>
        <h3>
          <TextStyle variation="strong">
            {product.title}
          </TextStyle>
        </h3>
      </Stack.Item>

      <Stack.Item>
        <p>
          Price range:&nbsp;
          {product.priceRange.minVariantPrice.amount}{product.priceRange.minVariantPrice.currencyCode}
          &nbsp;-&nbsp;
          {product.priceRange.maxVariantPrice.amount}{product.priceRange.maxVariantPrice.currencyCode}
        </p>
      </Stack.Item>
    </Stack>
  </ResourceList.Item>
)

export default memo(ProductItem)