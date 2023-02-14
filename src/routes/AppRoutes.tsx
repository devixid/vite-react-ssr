/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { Container, getDocumentTheme, NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/utils";
import { NavbarApp } from "@/components";
import Home from "@/pages";
import About from "@/pages/about";
import Layout from "@/layouts";

function AppRoutes(): JSX.Element {
  const location = useLocation();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const theme: string | null = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");

    const observer: MutationObserver = new MutationObserver((): void => {
      const newTheme: string = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });

    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return (): void => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Layout>
        {location.pathname !== "/loading" && <NavbarApp />}
        <Container>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </Container>
        {/* {location.pathname !== "/loading" && <Footer />} */}
      </Layout>
    </NextUIProvider>
  );
}

export default memo(AppRoutes);
