import { Equalable, Printable } from "./index";

export interface MyObject<T> extends Printable, Equalable<T> {}
