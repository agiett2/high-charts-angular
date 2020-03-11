import { BubbleGraphDataInterface } from './bubble.graph-data-interface';

export interface BubbleGraphSeriesInterface {
    readonly name: string;
    readonly type: string;
    readonly data: BubbleGraphDataInterface;
}
