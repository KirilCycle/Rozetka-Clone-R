import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import c from './style/MenuT.module.scss';
import Portal from '../portals/Portsl';

interface MenuInterface {
  v: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuT({ v, set }: MenuInterface) {
  const menuContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(menuContentRef.current);
    setTimeout(() => {
    menuContentRef.current!.style.transform = 'translateX(0%)'
    })
  }, []);

  function closeMenu (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    menuContentRef.current!.style.transform = 'translateX(-120%)'
    setTimeout(() => {
        set(false)
    },500)
  }

  return (
    <>
      {v && (
        <Portal>
          <div onClick={(e) => closeMenu(e as React.MouseEvent<HTMLDivElement> )} className={c.main_wrap}>
            <div ref={menuContentRef} className={c.menu_contnet_wrap}></div>
          </div>
        </Portal>
      )}
    </>
  );
}




