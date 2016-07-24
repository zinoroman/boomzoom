import { InterfaceOptions } from './interfaces/interface-options';
import { InterfaceBoomZoom } from './interfaces/interface-boomzoom';

export class BoomZoom implements InterfaceBoomZoom {
    public element: NodeList;

    private elementLength: number;
    private pluginName: string = 'BoomZoom';

    constructor(private selector: string) {
        this.getElement();
    }

    public getElement(): number {
        this.element = document.querySelectorAll(this.selector);
        this.elementLength = this.element.length;

        return this.elementLength;
    }

    public zoom(options: InterfaceOptions): NodeList {
        let i: number = 0;

        if (options.restore && this.isPluginData()) {
            this.restore();
        }

        for (i; i < this.elementLength; i++) {
            const element: HTMLElement = this.element[i] as HTMLElement;
            const elementData = this.calculateElementNewSizes(element, options.zoom);

            element.style.width = `${elementData.width}px`;
            element.style.height = `${elementData.height}px`;

            this.setPluginData(element);
        }

        return this.element;
    }

    public restore(): NodeList {
        let i: number = 0;

        for (i; i < this.elementLength; i++) {
            const element = this.element[i] as HTMLElement;
            
            element.style.width = '';
            element.style.height = '';

            this.removePluginData(element);
        }

        return this.element;
    }

    private calculateElementNewSizes(element: HTMLElement, zoom: number): {width: number, height: number} {
        return {
            width: element.offsetWidth * zoom,
            height: element.offsetHeight * zoom
        };
    }

    private setPluginData(element: HTMLElement) {
        element.setAttribute(`data-${this.pluginName}`, 'true');
    }

    private removePluginData(element: HTMLElement) {
        element.removeAttribute(`data-${this.pluginName}`);
    }

    private isPluginData(): boolean {
        if ((this.element[0] as HTMLElement).getAttribute(`data-${this.pluginName}`)) {
            return true;
        }

        return false;
    }
}