export default function getStudentsByLocation(students, city) {
  return students.filter((student_city) => student_city.location === city);
}
