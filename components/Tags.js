import { memo } from "react";
import { Heading, Tag } from "@shopify/polaris";

const Tags = ({ tags }) => (
  <>
    <Heading>Tags</Heading>

    {tags.map((tag, index) => (
      <Tag key={index}>{tag}</Tag>
    ))}
  </>
);

export default memo(Tags);
