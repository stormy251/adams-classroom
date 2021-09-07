import type {NextPage} from 'next';
import Head from 'next/head';
import {Page, Button, Grid} from '@geist-ui/react';
import {useEffect, useState} from 'react';

// Models
import {Job} from 'lib/supabase/models/job-models';
import {Week} from 'lib/supabase/models/week-model';

// Fetchers
import {getJobs} from 'lib/supabase/fetchers/jobs-fetchers';
import {getWeeks} from 'lib/supabase/fetchers/weeks-fetchers';

// Creators
import {useRouter} from 'next/router';

// Deleters
import {deleteWeek} from "lib/supabase/deleters/week-deleters";

// Icons
import {Trash2} from "@geist-ui/react-icons";

const WeekExplorer: NextPage = () => {
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [weeks, setWeeks] = useState<Week[]>([]);
  const router = useRouter();

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
  }, [weeks]);
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
        {/*  TODO: Possible a shared layout or table component with Jobs, Weeks, and Student Management? */}
        <ol>
          {weeks &&
            weeks.map(({id, created_at}: Week) => (
              <li key={created_at}>
                  <Grid.Container gap={2}>
                      <Grid><a onClick={() => router.push(`/weeks/${id}`)}>{new Date(created_at).toString()}</a></Grid>
                      <Grid><Button onClick={() => deleteWeek(id)} iconRight={<Trash2 />} auto scale={2/3} /></Grid>
                  </Grid.Container>
              </li>
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
