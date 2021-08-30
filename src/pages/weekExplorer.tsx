import type {NextPage} from 'next';
import Head from 'next/head';
import {Page, Button} from '@geist-ui/react';
import {useEffect, useState} from 'react';

// Models
import {Student} from 'lib/supabase/models/student-models';
import {Job} from 'lib/supabase/models/job-models';
import {Week} from 'lib/supabase/models/week-model';

// Fetchers
import {getJobs} from 'lib/supabase/fetchers/jobs-fetchers';
import {getWeeks} from 'lib/supabase/fetchers/weeks-fetchers';

// Creators
import {createWeek} from 'lib/supabase/creators/week-creators';

const WeekExplorer: NextPage = () => {
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [weeks, setWeeks] = useState<Week[]>([]);

  const loadWeeksAndJobs = async () => {
    const latestJobs = await getJobs();
    const latestWeeks = await getWeeks();
    setJobs(latestJobs);
    setWeeks(latestWeeks);
    if (isLoadingInfo) {
      setIsLoadingInfo(false);
    }
  };

  useEffect(() => {
    loadWeeksAndJobs();
  }, []);
  return (
    <Page>
      <Head>
        <title>Adams Classroom</title>
        <meta
          name="description"
          content="This app is used to help the teacher keep track of various tasks related to the classroom"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Header>
        <h2>Weeks</h2>
      </Page.Header>
      <Page.Content>
        <ol>
          {weeks &&
            weeks.map(({created_at}: Week) => (
              <li key={created_at}>{new Date(created_at).toString()}</li>
            ))}
        </ol>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default WeekExplorer;
