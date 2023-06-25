
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';


interface PortalInt {
    children: ReactNode,
    elId: string
}

const Portal = ({ children, elId }: PortalInt) => {

  const [domReady, setDomReady] = React.useState(false)

  React.useEffect(() => {
    setDomReady(true)
  }, [])

  const portalRoot = document.getElementById(elId);

  return  domReady ? 
   ReactDOM.createPortal(children, portalRoot as HTMLElement)
   :
   null
};

export default Portal;


