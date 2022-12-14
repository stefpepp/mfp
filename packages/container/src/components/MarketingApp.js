import React,{useRef, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }) => {
        if (history.location.pathname !== nextPath) {
          history.push(nextPath);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;