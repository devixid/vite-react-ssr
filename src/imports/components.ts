import { lazy } from "react";

export const NavbarApp = lazy(async () => await import("@/components/Navbar"));
export const Footer = lazy(async () => await import("@/components/Footer"));
export const Card = lazy(async () => await import("@/components/Card"));
