import React from 'react';
import { Transition } from 'react-transition-group';

function SliderNav(props) {

  const { in:status=true, timeout=500, effect='ease-in-out', children} = props;
  const flag = typeof window !== undefined ? true : false;
  let currentNodeHeight = 0;
  let currentNodeWidth = 0;
  function onEnter(el) {
    if (flag) {
      el.style.cssText = 'position: absolute; visibility: hidden; width: 100%; height: auto; z-index: -999;';
      const currentStyle = window.getComputedStyle(el);

      currentNodeHeight = currentStyle.height;
      currentNodeWidth = currentStyle.width;

      el.style.cssText = 'position: relative; visibility: visible; overflow: hidden; width: 0; height: 0; z-index: 0';
    }
  }

  function onEntered(el) {
    el.style.height = currentNodeHeight;
    el.style.width = currentNodeWidth;
    el.style.transition = `all ${timeout}ms ${effect}`;
  }

  function onExit(el) {
    el.style.height = currentNodeHeight;
    el.style.width = currentNodeWidth;
  }

  function onExited(el) {
    el.style.height = 0;
    el.style.width = 0;
    el.style.transition = `all ${timeout}ms ${effect}`;
  }

  return (
    <Transition
      in={status}
      timeout={timeout}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      >
      { children }
    </Transition>
  )
};

export default SliderNav;