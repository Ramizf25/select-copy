const fs = require("fs");

export function loadJSON(filename = "") {
  return JSON.parse(
    fs.existsSync(filename) 
    ? fs.readFileSync(filename).toString() : '""'
  );
}

export function saveJSON(filename='', json='""'){
    return fs.writeFileSync(
        filename, JSON.stringify(
            json,null
        )
    );
};

const data = loadJSON('results.json');
// ["data", "more data"].forEach(item =>
//   data.information.push(item)
//   )
// saveJSON('results.json',data)
console.log(data);
