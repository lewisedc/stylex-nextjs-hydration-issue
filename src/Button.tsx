"use client";

import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return <button {...stylex.props(styles.button)}>{children}</button>;
}

const styles = stylex.create({
  button: {
    backgroundColor: "green",
  },
});
