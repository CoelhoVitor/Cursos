import { PartialNegotiation, Negotiation } from "../models/index";

export class NegotiationService {
  getNegotiations(handler: Function): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/dados")
      .then(res => handler(res))
      .then(res => res.json())
      .then((datas: PartialNegotiation[]) =>
        datas.map(
          data => new Negotiation(new Date(), data.vezes, data.montante)
        )
      )
      .catch(err => {
        throw new Error(err);
      });
  }
}

export interface HandlerFunction {
  (res: Response): Response;
}
