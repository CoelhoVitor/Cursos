import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ap-vmessage",
  templateUrl: "./vmessage.component.html",
  styleUrls: ["./vmessage.component.scss"]
})
export class VmessageComponent implements OnInit {
  @Input() text = "";

  constructor() {}

  ngOnInit() {}
}
