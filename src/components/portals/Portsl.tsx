
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';


interface PortalInt {
    children: ReactNode,
    elId: string
}

const Portal = ({ children, elId }: PortalInt) => {
  const portalRoot = document.getElementById(elId);

  return ReactDOM.createPortal(children, portalRoot as HTMLElement);
};

export default Portal;


