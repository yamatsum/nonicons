const fs = require("fs").promises;
const path = require("path");

function writeFile(path, data) {
  const jsonStr = JSON.stringify(data);
  fs.writeFile(path, jsonStr, err => {
    if (err) rej(err);
    if (!err) {
      console.log(data);
    }
  });
}

(async () => {
  let mapping = await JSON.parse(await fs.readFile("mapping.json", "utf8"));
  const keys = Object.keys(mapping);
  const values = Object.values(mapping);
  let maxCodepoint = values.reduce((a, b) => (a > b ? a : b));
  maxCodepoint++;

  const noniconsFiles = await fs.readdir("../icons/");
  noniconsFiles.filter(file => file.match(/-8|-16/)).forEach(file => {
    if (keys.indexOf(path.basename(file, ".svg")) === -1) {
      mapping[path.basename(file, ".svg")] = String(maxCodepoint++);
    }
  });
  writeFile("mapping-diff.json", mapping);
})();
