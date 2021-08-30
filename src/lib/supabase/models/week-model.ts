import {Student} from "./student-models";

// string is job id
export type Week = {
    jobDetails: Record<string, Student[]>;
    created_at: string;
}