import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {

  public selectors;
  private last;
  public lastSelected: string;

  constructor() {
    this.last = [];
    this.selectors = [
      ".intro",
      "#lastName",
      ".intro, #lastName",
      "h1",
      "h1, p",
      "div > p",
      // "ul + p",
      // "ul ~ table",
      // "*",
      // "[id]",
      // "[id=address]",
      // "[id$=ess]",
      // "[id|=add]",
      // "[id^=L]",
      // "[title~=food]",
      // "[id*=s]",
      // ":checked",
      // ":disabled",
      // ":enabled",
      // ":empty",
      // ":focus",
      // "p:first-child",
      // "p::first-letter",
      // "p::first-line",
      // "p:first-of-type",
      // "h1:hover",
      // "input:in-range",
      // "input:out-of-range",
      // "input:invalid",
      // "input:valid",
      // "p:lang(it)",
      // "p:last-child",
      // "p:last-of-type",
      // "tr:nth-child(even)",
      // "tr:nth-child(odd)",
      // "li:nth-child(1)",
      // "li:nth-last-child(1)",
      // "li:nth-of-type(2)",
      // "li:nth-last-of-type(2)",
      // "b:only-child",
      // "h3:only-of-type",
      // ":root"
    ];
  }

  ngOnInit() {
  }

  selSelector (selector) {
    this.lastSelected = selector;
    if (this.last !== undefined) {
      for (let _s of this.last)
        _s.classList.remove("selectedSelector");
      this.last = [];
    }
    var t = this;
    switch (selector) {
      case 'div > p':
        selector = 'div > p,div > mup > p,div > mup > mup > p,div > mup > mup > mup > p';
      break;
    }
    [].forEach.call(
      document.querySelectorAll(selector),
      function (el) {
        let cont = el.classList.contains("selectedSelector");
        t.last.push(el);
        if (cont) return;
        el.classList.add("selectedSelector");
      }
    );
  }
}
