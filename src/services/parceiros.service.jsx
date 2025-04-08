import http from "../http-common";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

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
            typesString: res.data.types.map(t => t.type.name).join(', '),
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
}

export default new ParceirosService();