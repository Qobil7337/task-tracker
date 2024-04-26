import {Priority} from "../enums/priority.enum";
import {StatusEnum} from "../enums/status.enum";

export interface TaskApiModel {
  title: string;
  name: string;
  priority: Priority;
  status: StatusEnum;
  performer: string;
  deadline: Date;
}
