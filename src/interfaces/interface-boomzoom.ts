import { InterfaceBoomZoomOptions } from './interface-boomzoom-options';

export interface InterfaceBoomZoom {
    element: NodeList;
    
    initialize(selector: string): NodeList;
    zoom(options: InterfaceBoomZoomOptions): NodeList;
    restore(): NodeList;
}