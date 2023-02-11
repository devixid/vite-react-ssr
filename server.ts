/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import type { Express, NextFunction, Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import type { ViteDevServer } from "vite";
import sirv from "sirv";

const DEV_ENV = "development";

const server = async (): Promise<void> => {
  const app: Express = express();
  let vite: ViteDevServer;
  const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

  if (process.env.NODE_ENV === DEV_ENV) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    app.use(
      sirv("dist/client", {
        gzip: true,
      }),
    );
  }

  app.use(cors());
  app.use(helmet());

  app.use(
    "*",
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const url: string = req.originalUrl;
      let template: string, render: (arg0: { path: string }) => any;

      try {
        if (process.env.NODE_ENV === DEV_ENV) {
          template = fs.readFileSync(path.resolve("./index.html"), "utf-8");

          template = await vite.transformIndexHtml(url, template);

          render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
        } else {
          template = fs.readFileSync(
            path.resolve("dist/client/index.html"),
            "utf-8",
          );
          // run yarn build:server if you got error messege here
          render = (await import("./dist/server/entry-server.js")).render;
        }

        const appHtml = await render({ path: url });

        const html: string = template.replace("<!--ssr-outlet-->", appHtml);

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html").end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        next(error);
      }
    },
  );

  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
};

void server();
