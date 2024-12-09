import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";
import mixpanel from "mixpanel-browser";

 
// Near entry of your product, init Mixpanel

mixpanel.init("b49a53e30f92a2454eef35b1961a4f87", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});
const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
