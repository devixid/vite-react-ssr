import { lazy } from "react";

export const Layout = lazy(async () => await import("@/layouts/Layout"));
export const Contact = lazy(async () => await import("@/pages/Contact"));
export const Home = lazy(async () => await import("@/pages/Home"));
