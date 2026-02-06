// Class Average
// Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

// Average Score	Letter Grade
// 97-100	"A+"
// 93-96	"A"
// 90-92	"A-"
// 87-89	"B+"
// 83-86	"B"
// 80-82	"B-"
// 77-79	"C+"
// 73–76	"C"
// 70-72	"C-"
// 67-69	"D+"
// 63-66	"D"
// 60–62	"D-"
// below 60	"F"
// Calculate the average by adding all scores in the array and dividing by the total number of scores.

function getAverageGrade(scores) {
  console.log(scores);
  // get average
  const total = scores.reduce((total, current) => {
    return total + current;
  }, 0);
  console.log(total);

  const av = total / scores.length;
  console.log(av);

  // if ()

  const grades = [
    { score: 97, label: 'A+' },
    { score: 93, label: 'A' },
    { score: 90, label: 'A-' },
    { score: 87, label: 'B+' },
    { score: 83, label: 'B' },
    { score: 80, label: 'B-' },
    { score: 77, label: 'C+' },
    { score: 73, label: 'C' },
    { score: 70, label: 'C-' },
    { score: 67, label: 'D+' },
    { score: 63, label: 'D' },
    { score: 60, label: 'D-' },
    { score: 0, label: 'F' },
  ];

  // find the first threshold that is less than or equal to the average
  const finalGrade = grades.find((grade) => av >= grade.score);

  return finalGrade ? finalGrade.label : 'F';

  // console.log(grades[av])

  // return scores;
}
