import type {NextPage} from 'next';
import Head from 'next/head';
import {Card, Grid, Page, Tag, Text} from '@geist-ui/react';
import {useEffect, useState} from 'react';
import {getWeek} from 'lib/supabase/fetchers/weeks-fetchers';
import {useRouter} from 'next/router';
import {getJobs} from 'lib/supabase/fetchers/jobs-fetchers';
import {Week} from 'lib/supabase/models/week-model';
import {Job} from 'lib/supabase/models/job-models';

const WeekDetails: NextPage = () => {
  const router = useRouter();
  const [week, setWeek] = useState<Week | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const {weekId} = router.query;

  const loadWeekAndJobs = async () => {
    const latestWeek = await getWeek(weekId as string);
    setWeek(latestWeek);
    const latestJobs = await getJobs();
    setJobs(latestJobs);
  };

  useEffect(() => {
    if (weekId) {
      loadWeekAndJobs();
    }
  }, [weekId]);
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
      <Page.Header>{week && <h2>{new Date(week.created_at).toString()}</h2>}</Page.Header>
      <Page.Content>
        <Grid.Container gap={2} className="Container">
          {week &&
            Object.entries(week.jobDetails).map(([jobId, jobDetails]) => (
              <Grid xs={12} sm={12} md={6} key={jobId}>
                <Card width="100%">
                  <Text h3>{jobs?.find((job) => job.id === jobId)?.name}</Text>
                  <Grid.Container gap={2}>
                    {jobDetails.map((student, index) => (
                      <Grid xs={12} key={index + student.name}>
                        <Tag>{student.name}</Tag>
                      </Grid>
                    ))}
                  </Grid.Container>
                </Card>
              </Grid>
            ))}
        </Grid.Container>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default WeekDetails;
