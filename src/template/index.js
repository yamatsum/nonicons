const opts = require("minimist")(process.argv.slice(2));
const fs = require("fs").promises;
const path = require("path");

const OCTICON_CODEPOINST = 60000;
const NONICON_CODEPOINST = 70000;

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

(async () => {
  const octiconsFiles = await fs.readdir(opts.f);
  octiconsFiles.filter(file => file.match(/-8|-16/)).forEach((file, index) => {
    mapping[path.basename(file, ".svg")] = String(OCTICON_CODEPOINST + index);
  });

  const noniconsFiles = await fs.readdir("../icons/");
  noniconsFiles.filter(file => file.match(/-8|-16/)).forEach((file, index) => {
    mapping[path.basename(file, ".svg")] = String(NONICON_CODEPOINST + index);
  });

  if (stats) {
    console.log("file is exist.");
  } else {
    writeFile(outputPath, mapping);
  }
})();
