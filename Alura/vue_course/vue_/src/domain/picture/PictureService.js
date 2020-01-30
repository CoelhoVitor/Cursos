export default class PictureService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  list() {
    return this._resource.query().then(
      res => res.json(),
      err => {
        console.log(err);
        throw new Error("Não foi possível obter as fotos. Tenta mais tarde");
      }
    );
  }

  register(picture) {
    if (picture._id) {
      return this._resource.update({ id: picture._id }, picture);
    } else {
      return this._resource.save(picture);
    }
  }

  search(id) {
    return this._resource.get({ id }).then(res => res.json());
  }

  remove(id) {
    return this._resource.delete({ id }).then(null, err => {
      console.log(err);
      throw new Error("Não foi possível remover a foto. Tente mais tarde");
    });
  }
}
