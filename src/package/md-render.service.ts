import { Injectable } from '@angular/core';
import * as hljs from 'highlight.js';
import * as showdown from 'showdown';
import * as he from 'he';

@Injectable()
export class MdRenderService {

  constructor() {
    // Extend showdown with highlight.js
    showdown.extension('highlight', function () {
      return {
        type: 'output',
        filter: function (text, converter, options) {
          const replacement = (wholeMatch, match, left, right) => {
            console.log('match', wholeMatch);
            match = he.decode(match);
            // get lang
            const search = left.match(/.*language-(\w*).*/);
            if (search) {
              const updatedLeft = left.replace(/"(.*)"/, '"$1 hljs"');
              return updatedLeft + hljs.highlightAuto(match, [search[1]]).value + right;
            } else {
              return wholeMatch;
            }
          };
          return showdown.helper.replaceRecursiveRegExp(text, replacement, '<pre><code\\b[^>]*>', '</code></pre>', 'g');
        },
      };
    });
  }

  render(source: string): string {
    const converter = new showdown.Converter({
      extensions: ['highlight']
    });
    return converter.makeHtml(source);
  }

}
