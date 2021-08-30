import React, {FC} from 'react';
import {Job} from '../../../lib/supabase/models/job-models';
import {Student} from '../../../lib/supabase/models/student-models';

type JobCardProps = {
  job: Job;
};

const JobCard: FC<JobCardProps> = ({job}) => {
  return <></>;
};

export default JobCard;
