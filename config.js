System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "highcharts-release": "github:highslide-software/highcharts-release@4.1.9",
    "typescript": "npm:typescript@1.6.2",
    "github:highslide-software/highcharts-release@4.1.9": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
