import {Supabase} from '../index';
import {Student} from '../models/student-models';

export const getStudents = async (): Promise<Student[]> => {
  let {data: students, error} = await Supabase.from('students').select('*');

  return students || [];
};
