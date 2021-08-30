import {Student} from './student-models';
export type Job = {
  id: string;
  name: string;
  count: number;
  assignedStudents?: Student[];
};
