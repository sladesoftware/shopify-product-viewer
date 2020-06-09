import React from "react";
import { Tag } from "@shopify/polaris";
import mount from "../../test/mount";
import Tags from "../Tags";

describe("<Tags />", () => {
  it("displays no tags when no tags are given", () => {
    const component = mount(<Tags tags={[]} />);

    expect(component.text()).toBe("No tags");
  });

  it("displays 1 tag component when 1 tag is given", () => {
    const component = mount(<Tags tags={["tag1"]} />);

    expect(component.text()).toBe("tag1");
    expect(component).toContainReactComponent(Tag, { children: "tag1" });
  });

  it("displays 2 tag components when 2 tags are given", () => {
    const component = mount(<Tags tags={["tag1", "tag2"]} />);

    expect(component.text()).toBe("tag1tag2");
    expect(component).toContainReactComponent(Tag, { children: "tag1" });
    expect(component).toContainReactComponent(Tag, { children: "tag2" });
  });
});
