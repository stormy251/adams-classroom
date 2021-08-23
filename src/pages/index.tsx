import type {NextPage} from 'next';
import Head from 'next/head';
import {Button, Page, Text, Spacer} from '@geist-ui/react';
import {studentsFetcher} from 'lib/firebase/fetchers/students-fetchers';
import {jobsFetcher} from 'lib/firebase/fetchers/jobs-fetchers';
import {useEffect, useState} from 'react';
import {Student} from 'lib/firebase/models/student-models';
import {Job} from 'lib/firebase/models/job-models';

const Home: NextPage = () => {
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [students, setStudents] = useState<Student[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  const loadStudentsAndJobs = async () => {
    const latestStudents = await studentsFetcher();
    setStudents(latestStudents);
    const latestJobs = await jobsFetcher();
    setJobs(latestJobs);
    if (isLoadingInfo) {
      setIsLoadingInfo(false);
    }
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
        <h2>Student Jobs</h2>
      </Page.Header>
      <Page.Content>
        <div style={{display: 'flex'}}>
          <div>
            <Text h3>Students</Text>
            {!isLoadingInfo &&
              students &&
              students.map((student, index) => (
                <Text key={`${student.name}-${index + 1}`}>
                  {index + 1}. {student.name}
                </Text>
              ))}
          </div>
          <Spacer w={2} />
          <div>
            <Text h3>Jobs</Text>
            {!isLoadingInfo &&
              jobs &&
              jobs.map((job, index) => (
                <Text key={`${job.name}-${index + 1}`}>
                  {index + 1}. {job.name}
                </Text>
              ))}
          </div>
        </div>
        <p>This is a simulated page, you can click anywhere to close it.</p>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default Home;
