## Class Average

Transform an aray of scores to an average grade.

- `.reduce()` to get the total of the array.

- `arr.length` to divide the total of array to the number of array entries.

- Build an array of objects `{score: 97, label: "A+"}`, each score represents the lowest boundary for that grade.

- `.find()` method to return the label by checking the average score is greater or equal to `grade.score`.

- return the `finalGrade` or "F".
