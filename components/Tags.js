import { memo } from "react";
import { Heading, Tag } from "@shopify/polaris";

const Tags = ({ tags }) => (
  <>
    <Heading>Tags</Heading>

    {tags.length > 0 ? (
      <>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </>
    ) : (
      <p>No tags</p>
    )}
  </>
);

export default memo(Tags);
