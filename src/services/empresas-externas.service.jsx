import http from "../http-common";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";

class ParceirosService {
  getParceiros() {
    return http.get(url)
      .then(response => {
        const results = response.data.results;
        const requests = results.map(pokemon => 
          http.get(pokemon.url).then(res => ({
            id: res.data.id,
            name: res.data.name,
            types: res.data.types.map(t => t.type.name),
            typesString: res.data.types.map(t => t.type.name).join(', '), // Adicionado
            height: res.data.height / 10,
            weight: res.data.weight / 10,
            sprite: res.data.sprites.front_default 
          }))
        );
        return Promise.all(requests);
      })
      .then(details => ({ data: details }));
  }

  getParceiroById(url) {
    return http.get(url);
  }

  postParceiro(data) {
    return http.post(url, data);
  }

  putParceiro(id, data) {
    return http.put(`${url}/${id}`, data);
  }

  deleteParceiroById(id) {
    return http.delete(`${url}/${id}`);
  }
}

export default new ParceirosService();