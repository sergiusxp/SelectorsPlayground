import { Component, OnInit, Input } from '@angular/core';
import { SelectorContext } from '@angular/compiler';

@Component({
  selector: 'mup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.scss']
})
export class MarkupComponent implements OnInit {

  @Input() sel;
  @Input() class;
  @Input() id;
  @Input() lang;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  public buildSelector() {
    if (this.class === undefined && this.id === undefined && this.lang === undefined && this.title === undefined)
      return this.sel;
    var out = "";
    if (this.class != undefined)
      out = ' class="' + this.class + '"';
    if (this.id != undefined)
      out += ' id="' + this.id + '"';
    if (this.lang != undefined)
      out += ' lang="' + this.lang + '"';
      if (this.title != undefined)
    out += ' title="' + this.title + '"';
    return this.sel + out;
  }

}
