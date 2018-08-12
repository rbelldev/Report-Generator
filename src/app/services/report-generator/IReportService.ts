import {FullReport} from '../../models/reports/FullReport';

export interface IReportService {
  getReport(FullReport: FullReport): Promise<null>;
}
