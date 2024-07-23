const fs = require("fs");
const path = require("path");
const url = require("url");
const markdownMagic = require("markdown-magic"); // eslint-disable-line

const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const formatPluginName = (string) => toTitleCase(string.replace(/-/g, " "));

const username = (repo) => {
  if (!repo) {
    return null;
  }

  const o = url.parse(repo);
  var urlPath = o.path; // eslint-disable-line

  if (urlPath.length && urlPath.charAt(0) === "/") {
    urlPath = urlPath.slice(1);
  }

  urlPath = urlPath.split("/")[0];
  return urlPath;
};

const getRuntime = (dirname) => {
  if (!dirname) {
    return "unknown";
  }
  if (dirname.match(/node/)) {
    return "nodeJS";
  } else if (dirname.match(/python/)) {
    return "python";
  } else if (dirname.match(/swift/)) {
    return "swift";
  } else if (dirname.match(/php/)) {
    return "php";
  } else if (dirname.match(/ruby/)) {
    return "ruby";
  } else if (dirname.match(/golang/)) {
    return "golang";
  } else if (dirname.match(/dotnet/)) {
    return "dotnet";
  }
  return "unknown";
};

const config = {
  transforms: {
    /*
    In README.md the below comment block adds the list to the readme
    <!-- AUTO-GENERATED-CONTENT:START (GENERATE_SERVERLESS_EXAMPLE_TABLE)-->
      plugin list will be generated here
    <!-- AUTO-GENERATED-CONTENT:END -->
     */
    SERVERLESS_EXAMPLE_TABLE() {
      const examplesPath = path.join(__dirname, "examples.json");
      const examples = JSON.parse(fs.readFileSync(examplesPath, "utf8"));

      // Make table header
      let md = "| Example | Runtime  |\n";
      md += "|:--------------------------- |:-----|\n";
      examples.forEach((example) => {
        const dirname = example.dirname || "";
        const exampleUrl = `https://github.com/serverless/examples/tree/master/${dirname}`;
        const runtime = getRuntime(dirname);
        const description = example.description
          ? `<br/> ${example.description}`
          : "";
        // add table rows
        md += `| [${
          example.title || formatPluginName(example.name)
        }](${exampleUrl}) ${description} | ${runtime} |\n`;
      });

      return md;
    },
  },
};

const markdownPath = path.join(__dirname, "README.md");
markdownMagic(markdownPath, config, () => {
  console.log("Docs updated!"); // eslint-disable-line
});
