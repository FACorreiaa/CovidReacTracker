export default function generateRandomColor(countrySummary: []) {
  let arr = [];
  for (let i = 0; i < countrySummary.length; i++) {
    arr.push(random_rgba());
  }
  return arr;
}

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
