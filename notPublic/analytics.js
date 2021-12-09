const colombia = [];
const names = [
  "David",
  "Alejandro",
  "Luis",
  "Roxana",
  "Nicole",
  "Barbara",
  "Alejandra",
  "Mila",
  "Omer",
];
for (let i = 0; i < 1000; i++) {
  colombia.push({
    name: names[Math.floor(Math.random() * names.length)],
    salary: Math.random() * (1000000 - 100) + 100,
  });
}

function average(list) {
  const accumulate = list.reduce(function (accum = 0, element) {
    return accum + element;
  });
  const avg = accumulate / list.length;
  return avg;
}

function median(list) {
  list.sort((a, b) => a - b);
  const median_element_idx = parseInt(list.length / 2);
  if (list.length % 2 === 0) {
    return average([list[median_element_idx], list[median_element_idx - 1]]);
  } else {
    return list[median_element_idx];
  }
}

function mode(list) {
    const element_count = {};
    list.map(
        function (element) {
            if (element_count[element]) {
                element_count[element] += 1;
            } else {
                element_count[element] = 1;
            }
        }
    )
    const sorted_frequency = Object.entries(element_count).sort((a, b) => a[1] - b[1]);
    return parseInt(sorted_frequency[sorted_frequency.length - 1][0]);
}


const colombiaSalaries = colombia.map((person) => person.salary).sort((a, b) => a - b);
const spliceStart = (colombiaSalaries.length * 90) / 100;
const spliceCount = colombiaSalaries.length - spliceStart;
const colombiaTop10Salaries = colombiaSalaries.splice(spliceStart, spliceCount);

const colombiaSalariesMedian = median(colombiaSalaries);
const colombiaSalariesMode = mode(colombiaSalaries);

const colombiaTop10SalariesMedian = median(colombiaTop10Salaries);
const colombiaTop10SalariesMode = mode(colombiaTop10Salaries);

console.group("All Colombia");
console.log("All Colombia salaries median " + colombiaSalariesMedian);
console.log("All Colombia salaries mode " + colombiaSalariesMode);
console.groupEnd();

console.group("Colombia Top 10");
console.log("Colombia Top 10 salaries median " + colombiaTop10SalariesMedian);
console.log("Colombia Top 10 salaires mode " + colombiaTop10SalariesMode);
console.log("Colombia Top 10 size " + spliceCount);
console.log("Colombia Top 10 start " + spliceStart);
console.groupEnd();