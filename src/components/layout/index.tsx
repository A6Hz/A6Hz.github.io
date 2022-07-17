import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ResponsiveAppBar } from "../menu";

export function Layout(props: { children: ReactJSXElement }) {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ marginTop: 69 }}>{props.children}</div>
    </>
  );
}
