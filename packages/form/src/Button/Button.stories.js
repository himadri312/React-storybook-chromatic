import React from "react";

import Button from ".";

export default {
  component: Button,
  title: "Core|Button"
};

export const primary = () => <Button>{"Primary Button"}</Button>;

export const secondary = () => (
  <Button variant="secondary">{"Secondary Button"}</Button>
);

export const disabled = () => <Button disabled>{"Button"}</Button>;
