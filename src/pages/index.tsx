import type {NextPage} from 'next';
import Head from 'next/head';
import {Page, Button, Grid, Loading, Text} from '@geist-ui/react';
import {useEffect, useState} from 'react';
import {Student} from 'lib/supabase/models/student-models';
import {Job} from 'lib/supabase/models/job-models';
import {getJobs} from 'lib/supabase/fetchers/jobs-fetchers';
import {getStudents} from 'lib/supabase/fetchers/students-fetchers';
import {Week} from 'lib/supabase/models/week-model';
import {createWeek} from 'lib/supabase/creators/week-creators';
import {useRouter} from 'next/router';

const Home: NextPage = () => {
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [students, setStudents] = useState<Student[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();
  const loadStudentsAndJobs = async () => {
    const latestStudents = await getStudents();
    setStudents(latestStudents);
    const latestJobs = await getJobs();
    setJobs(latestJobs);
    if (isLoadingInfo) {
      setIsLoadingInfo(false);
    }
  };

  const assignStudentsJobs = async () => {
    setIsLoadingInfo(true);
    let assignableStudents = [];
    let currentlyAssignedStudents = 0;
    let week = {
      jobDetails: {}
    } as Week;
    const randomizedStudents = randomlySortStudents(students);
    jobs.forEach((job: Job) => {
      // provide a starting count from 0 to n || n to m
      // take the students from 0 to 10 or from the previous starting count in the loop to the number of roles in the job available
      assignableStudents = randomizedStudents.slice(
        currentlyAssignedStudents,
        currentlyAssignedStudents + job.count
      );
      // amend the job object with an assignedStudents array
      week.jobDetails[job.id] = assignableStudents;
      // reset assignable students
      currentlyAssignedStudents += assignableStudents.length;
    });
    try {
      await createWeek(week);
      setIsLoadingInfo(false);
    } catch (e) {
      console.error(e);
    }
  };
  const randomlySortStudents = (students: Student[]) => {
    for (let i = students.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [students[i], students[j]] = [students[j], students[i]];
    }
    return students;
  };

  useEffect(() => {
    loadStudentsAndJobs();
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
        <h2>Dashboard</h2>
      </Page.Header>
      <Page.Content>
        <Text h3>Week Management</Text>
        <Grid.Container gap={2}>
          <Grid>
            <Button disabled={isLoadingInfo} onClick={() => assignStudentsJobs()}>
              <Text>Create New Week</Text>
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => router.push('/weekExplorer')}>Week Explorer</Button>
          </Grid>
        </Grid.Container>
        <Text h3 pt={3}>
          Student Management
        </Text>
        <Grid.Container gap={2}>
          <Grid>
            <Button disabled>Add New Student</Button>
          </Grid>
        </Grid.Container>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default Home;
