import type {NextPage} from 'next';
import Head from 'next/head';
import {Button, Page} from '@geist-ui/react';
import {studentsFetcher} from 'lib/firebase/fetchers/students-fetchers';

const Home: NextPage = () => {
  const test = async () => {
    const myStudents = await studentsFetcher();
    console.log('myStudents:', myStudents);
  };

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
        <h2>Header</h2>
      </Page.Header>
      <Page.Content>
        <h2>Hello, Everyone.</h2>
        <p>This is a simulated page, you can click anywhere to close it.</p>
        <Button onClick={() => test()}>Test</Button>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default Home;
