import { PieGraphDataInterface } from '../../model/pie-graph/pie-graph-data.interface';

export abstract class PiegraphServiceAbstract {
    public abstract getData(): PieGraphDataInterface[];
}
