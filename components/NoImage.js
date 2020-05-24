import { memo } from "react";
import { TextStyle } from "@shopify/polaris";

const NoImage = () => (
  <div
    style={{ textAlign: "center", padding: 20, border: "1px solid lightgrey" }}
  >
    <TextStyle variation="strong">No image</TextStyle>
  </div>
);

export default memo(NoImage);
