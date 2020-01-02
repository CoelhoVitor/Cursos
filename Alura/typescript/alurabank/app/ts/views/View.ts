class View<T> {
  public _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: T): void {
    this._element.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw new Error("Você deve implementar o método template");
  }
}
