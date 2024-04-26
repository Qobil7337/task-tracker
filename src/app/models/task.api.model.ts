import {Priority} from "../enums/priority.enum";
import {Status} from "../enums/status.enum";

export interface TaskApiModel {
  title: string;
  name: string;
  priority: Priority;
  status: Status;
  performer: string;
  deadline: Date;
}
