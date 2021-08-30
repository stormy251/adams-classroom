import type {NextPage} from 'next';
import Head from 'next/head';
import {Page, Button} from '@geist-ui/react';
import {useEffect, useState} from 'react';
import {getWeek} from "lib/supabase/fetchers/weeks-fetchers";
import {useRouter} from "next/router";
import {getJobs} from "lib/supabase/fetchers/jobs-fetchers";
import {Week} from "lib/supabase/models/week-model";

const WeekDetails: NextPage = () => {
    const router = useRouter();
    const {weekId} = router.query;
    const [isLoadingInfo, setIsLoadingInfo] = useState(true);
    const [week, setWeek] = useState<Week | null>(null);
    const [jobs, setJobs] = useState({});

    const loadWeekAndJobs = async () => {
        const latestWeek = await getWeek(weekId as string);
        setWeek(latestWeek);
        const latestJobs = await getJobs();
        setJobs(latestJobs);
        console.log(latestWeek)
    };

    useEffect(() => {
        loadWeekAndJobs();
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
            </Page.Content>
            <Page.Footer>
                <h2>Footer</h2>
            </Page.Footer>
        </Page>
    );
};

export default WeekDetails;
