import firebase from '../firebase-init';
import {Student} from '../models/student-models';

export const studentsFetcher = async (): Promise<Student[]> => {
  const functionalErrorCode = 'studentsFetcher';

  const students: Student[] = [];

  try {
    const studentsCollectionRef = await firebase
      .firestore()
      .collection('students')
      .orderBy('name')
      .get();

    studentsCollectionRef.forEach((doc) => {
      const student = doc.data() as Student;
      students.push(student);
    });
  } catch (error) {
    console.error(`[${functionalErrorCode}] - Error when fetching all students: ${error}`);
  }

  return students;
};
