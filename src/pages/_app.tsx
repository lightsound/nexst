import "ress";
import "src/styles/global.scss";

import type { AppProps } from "next/app";

// eslint-disable-next-line import/no-default-export
export default function App(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}
