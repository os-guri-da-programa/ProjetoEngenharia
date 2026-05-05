// Dados de mock para simular registros de entrada de produtos de um bar
// Cada entrada contém fornecedor, data, produtos e totais.
const mockEntradasBar = [
  {
    id: 1,
    fornecedor: "Distribuidora Águia Azul",
    dataEntrada: "2026-05-01",
    produtos: [
      { nome: "Cerveja Long Neck", qtd: 120, preco: 4.50, total: 540.00 },
      { nome: "Refrigerante 2L", qtd: 25, preco: 8.00, total: 200.00 },
      { nome: "Água mineral 500ml", qtd: 40, preco: 3.50, total: 140.00 }
    ],
    totalQtd: 185,
    totalValor: 880.00
  },
  {
    id: 2,
    fornecedor: "Vinhos & Cia",
    dataEntrada: "2026-05-03",
    produtos: [
      { nome: "Vinho tinto 750ml", qtd: 15, preco: 32.00, total: 480.00 },
      { nome: "Espumante 750ml", qtd: 10, preco: 45.00, total: 450.00 }
    ],
    totalQtd: 25,
    totalValor: 930.00
  },
  {
    id: 3,
    fornecedor: "Atacado Petiscos",
    dataEntrada: "2026-05-05",
    produtos: [
      { nome: "Porção de batata frita", qtd: 30, preco: 12.00, total: 360.00 },
      { nome: "Azeitona temperada", qtd: 20, preco: 9.00, total: 180.00 },
      { nome: "Amendoim salgado", qtd: 50, preco: 5.20, total: 260.00 }
    ],
    totalQtd: 100,
    totalValor: 800.00
  },
  {
    id: 4,
    fornecedor: "Distribuidora Tropicália",
    dataEntrada: "2026-05-07",
    produtos: [
      { nome: "Cachaça artesanal 700ml", qtd: 12, preco: 28.00, total: 336.00 },
      { nome: "Suco de limão 1L", qtd: 20, preco: 7.50, total: 150.00 }
    ],
    totalQtd: 32,
    totalValor: 486.00
  },
  {
    id: 5,
    fornecedor: "Fornecedor do Bar Central",
    dataEntrada: "2026-05-09",
    produtos: [
      { nome: "Vodka 1L", qtd: 8, preco: 35.00, total: 280.00 },
      { nome: "Xarope de grenadine", qtd: 10, preco: 6.50, total: 65.00 },
      { nome: "Limão Tahiti", qtd: 60, preco: 1.80, total: 108.00 }
    ],
    totalQtd: 78,
    totalValor: 453.00
  }
];

