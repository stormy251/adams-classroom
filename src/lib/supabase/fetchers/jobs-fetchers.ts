import {Supabase} from '../index';
import {Job} from '../models/job-models';

export const getJobs = async (): Promise<Job[]> => {
  let {data: jobs, error} = await Supabase.from('jobs').select('*');

  return jobs || [];
};
