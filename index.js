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

  const grades = {
    97: 'A+',
    93: 'A',
    90: 'A-',
    87: 'B+',
    83: 'B',
    80: 'B-',
    77: 'C+',
    73: 'C',
    70: 'C-',
    67: 'D+',
    63: 'D',
    60: 'D-',
    0: 'F',
  };

  console.log(grades[av] > av);

  // return scores;
}
