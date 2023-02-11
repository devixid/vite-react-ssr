import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop(): null {
  const location = useLocation();
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
