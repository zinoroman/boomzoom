import { InterfaceOptions } from './interface-options';

export interface InterfaceBoomZoom {
    element: NodeList;
    
    initialize(): NodeList;
    zoom(options: InterfaceOptions): NodeList;
    restore(): NodeList;
}