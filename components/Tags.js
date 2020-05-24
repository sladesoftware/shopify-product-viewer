import { memo } from "react";
import { Tag } from "@shopify/polaris";

const Tags = ({ tags }) => {
  if (tags.length === 0) {
    return <p>No tags</p>;
  }

  return (
    <>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </>
  );
};

export default memo(Tags);
