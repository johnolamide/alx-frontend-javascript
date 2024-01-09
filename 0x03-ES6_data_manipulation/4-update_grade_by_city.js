function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.find((item) => item.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}

export default updateStudentGradeByCity;
