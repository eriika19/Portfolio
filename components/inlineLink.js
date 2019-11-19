import React from "react";
import { Email, Item, A } from "react-html-email";
const InlineLink = () => (
  <Email title="link">
    <Item>
      <A style={{ paddingLeft: 10 }}>Click me!</A>
    </Item>
  </Email>
);
export default InlineLink;