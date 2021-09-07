import {Student} from './student-models';

// string is job id
export type Week = {
  id?: string;
  jobDetails: Record<string, Student[]>;
  created_at: string;
};
