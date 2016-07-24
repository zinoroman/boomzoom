import { InterfaceOptions } from './interface-options';

export interface InterfaceBoomZoom {
    element: NodeList;
    
    getElement(): number;
    zoom(options: InterfaceOptions): NodeList;
    restore(): NodeList;
}