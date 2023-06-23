
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';


interface PortalInt {
    children: ReactNode
}

const Portal = ({ children }: PortalInt) => {
  const portalRoot = document.getElementById('menu-portal');

  return ReactDOM.createPortal(children, portalRoot as HTMLElement);
};

export default Portal;


