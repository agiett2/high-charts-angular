export interface PieGraphSeries {
    readonly minPointSize: number;
    readonly innerSize: string;
    readonly zMin: number;
    readonly name: string;
    readonly data: PieGraphSeries[];
}