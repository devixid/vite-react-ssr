/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/pages/Loading";
import { Container, getDocumentTheme, NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/utils";
import { Layout, Home, Contact, NavbarApp } from "@/imports";

export function AppRoutes(): JSX.Element {
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
      <Suspense fallback={<Loading />}>
        <Layout>
          {location.pathname !== "/loading" && <NavbarApp />}
          <Container>
            <Routes>
              <Route
                path="/"
                element={<h1>Hallo Dunia</h1>}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </Container>
          {/* {location.pathname !== "/loading" && <Footer />} */}
        </Layout>
      </Suspense>
    </NextUIProvider>
  );
}
