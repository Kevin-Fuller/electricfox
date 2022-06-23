import { useEffect } from "react";
import { useLocation } from "react-router";

//I got this fix for react-router-dom not scrolling to the top from: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };
  
  export default ScrollToTop;