const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((ng) => ng.studentId === student.id);
      return gradeObj ? { ...student, grade: gradeObj.grade } : { ...student, grade: 'N/A' };
    });
};

export default updateStudentGradeByCity;
