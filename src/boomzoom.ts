import { InterfaceOptions } from './interfaces/interface-options';
import { InterfaceBoomZoom } from './interfaces/interface-boomzoom';

export class BoomZoom implements InterfaceBoomZoom {
    public element: NodeList;

    public initialize(selector: string): NodeList {
        return this.element = document.querySelectorAll(selector);
    }

    public zoom(options: InterfaceOptions): NodeList {
        for (let i = 0, 
                length = this.element.length, 
                isRestoreRequired = options.restore,
                zoomCoefficient = options.zoom; i < length; i++) {
            const element: HTMLElement = this.element[i] as HTMLElement;

            if (isRestoreRequired) {
                this.restoreSizes(element);
            }

            const elementSizes = this.calculateSizes(element, zoomCoefficient);

            this.setSizes(element, {
                width: elementSizes.width,
                height: elementSizes.height
            });
        }

        return this.element;
    }

    public restore(): NodeList {
        for (let i = 0, length = this.element.length; i < length; i++) {
            this.restoreSizes(this.element[i] as HTMLElement);
        }

        return this.element;
    }

    private restoreSizes(element: HTMLElement) {
        this.setSizes(element, {
            width: '',
            height: ''
        });
    }

    private setSizes(element: HTMLElement, options: {width: number|string, height: number|string}) {
        element.style.width = options.width ? `${options.width}px` : '';
        element.style.height = options.height ? `${options.height}px` : '';
    }

    private calculateSizes(element: HTMLElement, zoom: number): {width: number, height: number} {
        return {
            width: element.offsetWidth * zoom,
            height: element.offsetHeight * zoom
        };
    }
}