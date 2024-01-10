interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}.${lastName}`;
}

interface PrintTeacherFunction{
  (firstName: string, lastName: string): string;
}

const printTeacherFunction: PrintTeacherFunction = printTeacher;

console.log(printTeacherFunction("John", "Doe"));