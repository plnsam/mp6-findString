const serie = {
  nome: "Pretty little liars",
  temporadas: 7,
  ano: 2010,
  tipo: "mistério",
  personagem: "Spencer Hastings",
};

exibirProp(serie);

function exibirProp(typ) {
  for (strg in typ)
    if (typeof typ[strg] === "string") console.log(strg, ":", typ[strg]);
}
