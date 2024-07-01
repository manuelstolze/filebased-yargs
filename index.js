const path = require("path");
const YargsLoader = require("./src/yargs-loader/YargsLoader");

const OPTION_FILE_PATH = path.join(__dirname, "/config/yargs-options.yaml");

function main() {
  const yargsLoader = new YargsLoader(OPTION_FILE_PATH);
  console.log(yargsLoader.options);
}

if (require.main === module) {
  main();
}
