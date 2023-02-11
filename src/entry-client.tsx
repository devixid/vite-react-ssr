import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "@/routes";
import { ScrollToTop } from "@/utils";
import "@/sass/root.scss";
import { SSRProvider } from "@react-aria/ssr";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <Router>
    <SSRProvider>
      <ScrollToTop />
      <AppRoutes />
    </SSRProvider>
  </Router>,
);
