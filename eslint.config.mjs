import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,

  {
    "rules": {
      semi: [2, "always"],
      quotes: [2, "double"],
    }
  }
];

