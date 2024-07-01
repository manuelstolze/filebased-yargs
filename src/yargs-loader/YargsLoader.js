const yaml = require("js-yaml");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");

const DEFAULT_OPTIONS = {
  verbose: {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  },
};

class YargsLoader {
  constructor(optionFile) {
    const options = this._loadOptionsFromFile(optionFile);
    this.options = this._loadArgs(options);
  }

  _loadOptionsFromFile(path) {
    return yaml.load(fs.readFileSync(path, { encoding: "utf-8" }));
  }

  _loadArgs(options) {
    const mergedOptions = { ...options, ...DEFAULT_OPTIONS };

    return yargs(hideBin(process.argv))
      .options(mergedOptions)
      .parserConfiguration({
        "camel-case-expansion": false,
      })
      .help().argv;
  }
}

module.exports = YargsLoader;
