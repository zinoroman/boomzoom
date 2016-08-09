import { InterfaceBoomZoomOptions } from './interfaces/interface-boomzoom-options';
import { InterfaceBoomZoom } from './interfaces/interface-boomzoom';

export class BoomZoom implements InterfaceBoomZoom {
    public elements: NodeList;

    public initialize(selector: string): NodeList {
        return this.elements = document.querySelectorAll(selector);
    }

    public zoom(options: InterfaceBoomZoomOptions): NodeList {
        const length = this.elements.length;
        const isRestoreRequired = options.restore;
        const zoomCoefficient = options.zoomCoefficient;

        for (let i = 0; i < length; i++) {
            const element: HTMLElement = this.elements[i] as HTMLElement;

            if (isRestoreRequired) {
                this.restoreSizes(element);
            }

            const elementSizes = this.calculateSizes(element, zoomCoefficient);

            this.setSizes(element, {
                width: elementSizes.width,
                height: elementSizes.height
            });
        }

        return this.elements;
    }

    public restore(): NodeList {
        const length = this.elements.length;
        
        for (let i = 0; i < length; i++) {
            this.restoreSizes(this.elements[i] as HTMLElement);
        }

        return this.elements;
    }

    private restoreSizes(element: HTMLElement) {
        this.setSizes(element);
    }

    private setSizes(element: HTMLElement, options?: {width: number, height: number}) {
        /*
            If options are not passed to the current method 
            we will just restore width and height of elements, using the empty string
         */
        element.style.width = options ? `${options.width}px` : '';
        element.style.height = options ? `${options.height}px` : '';
    }

    private calculateSizes(element: HTMLElement, zoomCoefficient: number): {width: number, height: number} {
        return {
            width: element.offsetWidth * zoomCoefficient,
            height: element.offsetHeight * zoomCoefficient
        };
    }
}
