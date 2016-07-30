import { InterfaceOptions } from './interface-options';

export interface InterfaceBoomZoom {
    element: NodeList;
    
    initialize(selector: string): NodeList;
    zoom(options: InterfaceOptions): NodeList;
    restore(): NodeList;
}