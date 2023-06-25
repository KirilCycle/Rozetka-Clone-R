import { ReactNode } from "react"


export interface ModalProps {
    portalId: string
    children: ReactNode
    active: boolean
    setVisible: Function
    closeBtn: ReactNode
    
}


export interface ModalContentProps extends Omit<ModalProps, 'portalId' | 'active' | 'setVisible'> {
    close: () => void;
}