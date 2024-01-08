function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.reduce((total, student) => total + student.id, 0);
}

export default getStudentIdsSum;
