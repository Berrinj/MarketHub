import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * @description ScrollToTop component scrolls to the top of the page when a new page is loaded as it was not doing so by default
 * @returns null
 */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;