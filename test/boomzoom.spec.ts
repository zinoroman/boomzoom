import { BoomZoom } from '../src/boomzoom';

describe('BoomZoom', () => {
    let testDiv;
    let testDivSizes;
    let boomZoom;

    const elementData = {
        tag: 'div',
        id: 'test-element',
        html: 'Test message'
    };
    const zoomCoefficient = .5;

    beforeEach(() => {
        testDiv = document.createElement(elementData.tag);
        testDiv.id = elementData.id;
        testDiv.innerHTML = elementData.html;
        
        document.body.appendChild(testDiv);

        testDivSizes = {
            width: testDiv.offsetWidth,
            height: testDiv.offsetHeight
        };

        boomZoom = new BoomZoom();
        boomZoom.initialize(`#${elementData.id}`);
    });

    afterEach(() => {
        document.body.removeChild(testDiv);
    });

    it("should zoom element's width and height", () => {
        boomZoom.zoom({
            zoomCoefficient: zoomCoefficient
        });

        expect(testDiv.offsetHeight).toBe(Math.round(testDivSizes.height * zoomCoefficient));
        expect(testDiv.offsetWidth).toBe(Math.round(testDivSizes.width * zoomCoefficient));
    });

    it("should restore element's width and height after BoomZoom", () => {
        boomZoom.zoom({
            zoomCoefficient: zoomCoefficient
        });

        boomZoom.restore();

        expect(testDiv.offsetHeight).toBe(testDivSizes.height);
        expect(testDiv.offsetWidth).toBe(testDivSizes.width);
    });

    it("should restore element's width and height before each BoomZoom.zoom() call", () => {
        boomZoom.zoom({
            zoomCoefficient: zoomCoefficient
        });

        boomZoom.zoom({
            zoomCoefficient: zoomCoefficient,
            restore: true
        });

        expect(testDiv.offsetHeight).toBe(Math.round(testDivSizes.height * zoomCoefficient));
        expect(testDiv.offsetWidth).toBe(Math.round(testDivSizes.width * zoomCoefficient));
    });
});