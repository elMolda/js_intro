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
