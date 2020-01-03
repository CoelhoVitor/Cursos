import { executionTimeLog } from "../helpers/decorators/index";

export abstract class View<T> {
  protected _element: JQuery;
  private _escape: boolean;

  constructor(selector: string, escape: boolean = false) {
    // this._element = document.querySelector(selector);
    this._element = $(selector);
    this._escape = escape;
  }

  //@ExecutionTimeLog(true)
  update(model: T): void {
    let template = this.template(model);
    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    this._element.html(template);
  }

  abstract template(model: T): string;
}
