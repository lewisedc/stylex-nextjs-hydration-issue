import Button from "@/Button";
import * as stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <div>
      <h1 {...stylex.props(styles.heading)}>Test</h1>
      <Button>Click me!</Button>
    </div>
  );
}

const styles = stylex.create({
  heading: {
    fontSize: 60,
    color: "red",
  },
});
