import { InterfaceBoomZoomOptions } from './interface-boomzoom-options';

export interface InterfaceBoomZoom {
    elements: NodeList;
    
    initialize(selector: string): NodeList;
    zoom(options: InterfaceBoomZoomOptions): NodeList;
    restore(): NodeList;
}