export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find(
        (entry) => entry.studentId === student.id
      );
      const grade = gradeEntry ? gradeEntry.grade : 'N/A';

      // Return a new object with updated grade
      return { ...student, grade };
    });
}
