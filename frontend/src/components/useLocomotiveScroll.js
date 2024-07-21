import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      getDirection: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
