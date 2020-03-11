import { BubbleGraphDataInterface } from 'src/app/model/bubble-graph/bubble.graph-data-interface';

export abstract class BubbleGraphServiceAbstract {
    public abstract getEuropeData(): BubbleGraphDataInterface[];
    public abstract getAfricaData(): BubbleGraphDataInterface[];
    public abstract getOceaniaData(): BubbleGraphDataInterface[];
    public abstract getNorthAmericaData(): BubbleGraphDataInterface[];
    public abstract getSouthAmericaData(): BubbleGraphDataInterface[];
    public abstract getAsiaData(): BubbleGraphDataInterface[];
}
