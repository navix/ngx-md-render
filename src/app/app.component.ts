import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MdRenderService } from '../package/md-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Markdown renderer!';
  rendered: SafeHtml;

  private source = `
# Title
     
Text
    
## Code (with Highlight.js)
     
\`\`\`css
.classy {
  background: yellow;
}
\`\`\`

### List

* First
* Second
* 3rd
`;

  constructor(private sanitizer: DomSanitizer,
              private mdRender: MdRenderService) {
  }

  ngOnInit() {
    this.rendered = this.sanitizer.bypassSecurityTrustHtml(this.mdRender.render(this.source));
  }

}
