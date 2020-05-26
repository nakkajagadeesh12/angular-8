import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}</h1>
    <h2>{{ fun() }}</h2>
    <input [disabled]="false" type="text" />
    <div [class.div1]="val">Hello</div>
    <button (click)="fun1($event)">click</button>
    <br />
    <div *ngIf ="val then ifblock;else elseblock"></div>
    <ng-template #ifblock>
    <h1>visible</h1>
    </ng-template>
    <ng-template #elseblock>
    <h1>hidden</h1>
    </ng-template>
    <br />
    <button class="btn btn-primary">click Here</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
        color: violet;
        font-size: 30px;
      }
      .div1 {
        color: blue;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  public str: string = "Jagath";
  public val: boolean = false;
  fun() {
    return "hii " + this.str;
  }
  fun1(e){
    console.log("button",e);
  }
}
