import {
  __commonJS
} from "./chunk-ZS7NZCD4.js";

// node_modules/highlight.js/lib/languages/vbscript-html.js
var require_vbscript_html = __commonJS({
  "node_modules/highlight.js/lib/languages/vbscript-html.js"(exports, module) {
    function vbscriptHtml(hljs) {
      return {
        name: "VBScript in HTML",
        subLanguage: "xml",
        contains: [
          {
            begin: "<%",
            end: "%>",
            subLanguage: "vbscript"
          }
        ]
      };
    }
    module.exports = vbscriptHtml;
  }
});

export {
  require_vbscript_html
};
//# sourceMappingURL=chunk-WJW6UBCG.js.map
