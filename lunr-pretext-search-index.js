var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Ficha técnica",
  "number": "",
  "title": "Ficha técnica",
  "body": ""
},
{
  "id": "sec-section-vetores",
  "level": "1",
  "url": "sec-section-vetores.html",
  "type": "Seção",
  "number": "1.1",
  "title": "Vetores",
  "body": " Vetores   Vetores são objetos matemáticos que possuem tanto magnitude quanto direção. São usados amplamente em várias áreas da matemática, física, e engenharia para representar quantidades como força, velocidade e deslocamento.    Definições  Um vetor é representado por uma flecha que aponta na direção desejada, onde o comprimento da flecha representa a magnitude do vetor.  Vetores podem ser denotados por coordenadas. Por exemplo, o vetor no plano cartesiano possui componentes e , que representam suas projeções nos eixos e , respectivamente.    Operações com Vetores  Algumas operações básicas com vetores incluem:    Adição de Vetores : Dados dois vetores e , sua soma é dada por .    Multiplicação por Escalar : Dado um vetor e um escalar , o vetor escalado é .    Produto Escalar : Dados dois vetores e , o produto escalar é .     Representação de Vetores em Duas Dimensões   Representação de dois vetores e sua soma em um sistema de coordenadas.     Adicionando um parágrafo de teste    Exemplo de Operações com Vetores  Considere os vetores e . Vamos realizar algumas operações básicas:   Adição de Vetores:   Multiplicação por Escalar: Se multiplicarmos o vetor por 2, obtemos .  Produto Escalar: O produto escalar dos vetores é .    "
},
{
  "id": "subsec-operacoes-3-1-1",
  "level": "2",
  "url": "sec-section-vetores.html#subsec-operacoes-3-1-1",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adição de Vetores "
},
{
  "id": "subsec-operacoes-3-2-1",
  "level": "2",
  "url": "sec-section-vetores.html#subsec-operacoes-3-2-1",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Multiplicação por Escalar "
},
{
  "id": "subsec-operacoes-3-3-1",
  "level": "2",
  "url": "sec-section-vetores.html#subsec-operacoes-3-3-1",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Produto Escalar "
},
{
  "id": "figure-tikz-vectors",
  "level": "2",
  "url": "sec-section-vetores.html#figure-tikz-vectors",
  "type": "Figura",
  "number": "1.1.1",
  "title": "",
  "body": " Representação de Vetores em Duas Dimensões   Representação de dois vetores e sua soma em um sistema de coordenadas.    "
},
{
  "id": "ex-vetores-operacoes",
  "level": "2",
  "url": "sec-section-vetores.html#ex-vetores-operacoes",
  "type": "Exemplo",
  "number": "1.1.2",
  "title": "Exemplo de Operações com Vetores.",
  "body": " Exemplo de Operações com Vetores  Considere os vetores e . Vamos realizar algumas operações básicas:   Adição de Vetores:   Multiplicação por Escalar: Se multiplicarmos o vetor por 2, obtemos .  Produto Escalar: O produto escalar dos vetores é .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Ficha técnica",
  "number": "",
  "title": "Ficha técnica",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
