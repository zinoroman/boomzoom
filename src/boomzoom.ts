import { InterfaceOptions } from './interfaces/interface-options';
import { InterfaceBoomZoom } from './interfaces/interface-boomzoom';

export class BoomZoom implements InterfaceBoomZoom {
    public element: NodeList;

    private elementLength: number;
    private pluginName: string = 'boomzoom';

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

        if (this.isRestoreNeed(options.restore)) {
            this.restore();
        }

        for (i; i < this.elementLength; i++) {
            const element: HTMLElement = this.element[i] as HTMLElement;
            const elementData = this.calculateElementNewSizes(element, options.zoom);

            this.setElementSizes(element, {
                width: `${elementData.width}px`,
                height: `${elementData.height}px`
            });

            this.setPluginData(element);
        }

        return this.element;
    }

    public restore(): NodeList {
        let i: number = 0;

        for (i; i < this.elementLength; i++) {
            const element = this.element[i] as HTMLElement;
            
            this.setElementSizes(element, {
                width: '',
                height: ''
            });

            this.removePluginData(element);
        }

        return this.element;
    }

    private isRestoreNeed(restore: boolean): boolean {
        if (restore && this.isPluginData()) {
            return true;
        }

        return false;
    }

    private setElementSizes(element: HTMLElement, options: {width: string, height: string}): HTMLElement {
        element.style.width = options.width;
        element.style.height = options.height;

        return element;
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