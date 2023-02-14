import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ScrollToTop } from "@/utils";
import "@/sass/root.scss";
import { AppRoutes } from "@/routes";
import { SSRProvider } from "react-aria";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <SSRProvider>
        <ScrollToTop />
        <AppRoutes />
      </SSRProvider>
    </StaticRouter>,
  );
};
