const salaries = [900, 100, 300, 100, 700, 200, 400];

function average(list) {
  //let accumulate = 0;
  //for (let i = 0; i < list.length; i++) {
  //   accumulate = accumulate + list[i]
  //}
  //const avg = accumulate / list.length
  //return avg
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
