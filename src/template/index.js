const opts = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const path = require("path");

const outputPath = opts.o || "mapping.json";
const mapping = {};

// ファイルの書き込み関数
function writeFile(path, data) {
  const jsonStr = JSON.stringify(data);
  fs.writeFile(path, jsonStr, err => {
    if (err) rej(err);
    if (!err) {
      console.log(data);
    }
  });
}

// ファイルの確認の関数
function isExistFile(file) {
  try {
    fs.statSync(file);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") return false;
  }
}

if (!opts.f || typeof opts.f !== "string") {
  console.log("use -f to specify your octicons icons path");
  return;
}
const stats = isExistFile(outputPath);

fs.readdir(opts.f, (err, files) => {
  files.filter(file => file.match(/-16/)).forEach((file, index) => {
    mapping[path.basename(file, ".svg")] = String(60000 + index);
  });
  if (stats) {
    console.log("file is exist.");
  } else {
    writeFile(outputPath, mapping);
  }
});
