export interface TaskApiModel {
  title: string;
  name: string;
  priority: 'low' | 'medium' | 'high'; // enum qlish kere
  status: 'todo' | 'inProgress' | 'done'; // buniyam
  performers: string[];
  deadline: Date;
}
