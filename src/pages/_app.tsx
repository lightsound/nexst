import "ress";
import "src/styles/global.scss";

import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default App;
