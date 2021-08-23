import firebase from '../firebase-init';
import {Job} from '../models/job-models';

export const jobsFetcher = async (): Promise<Job[]> => {
  const functionalErrorCode = 'jobsFetcher';

  const jobs: Job[] = [];

  try {
    const jobsCollectionRef = await firebase.firestore().collection('jobs').orderBy('name').get();

    jobsCollectionRef.forEach((doc) => {
      const job = doc.data() as Job;
      jobs.push(job);
    });
  } catch (error) {
    console.error(`[${functionalErrorCode}] - Error when fetching all jobs: ${error}`);
  }

  return jobs;
};
