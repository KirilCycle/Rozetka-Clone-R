import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import c from './style/MenuT.module.scss';
import Portal from '../portals/Portsl';
import MenuContentBeta from './MenuContentBeta';

interface MenuInterface {
  v: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuT({ v, set }: MenuInterface) {
 
  const menuContentRef = useRef<HTMLDivElement | null>(null);
  const menuWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(menuContentRef.current);
    setTimeout(() => {
    menuContentRef.current!.style.transform = 'translateX(0%)'
    menuWrapRef.current!.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    })
  }, []);

  function closeMenu (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    menuContentRef.current!.style.transform = 'translateX(-120%)'
    menuWrapRef.current!.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    setTimeout(() => {
        set(false)
    },500)
  }

  return (
    <>
      {v && (
        <Portal elId='menu-portal'>
          <div onClick={(e) => closeMenu(e as React.MouseEvent<HTMLDivElement> )} ref={menuWrapRef} className={c.main_wrap}>
            <div  onClick={(e) => e.stopPropagation() } ref={menuContentRef} className={c.menu_contnet_wrap}>
                <MenuContentBeta closeFn={closeMenu}></MenuContentBeta>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}




