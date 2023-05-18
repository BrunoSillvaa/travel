export interface location {
  name: string
  image: string
  country: string
  price: number
  descrition: string
}

export const locationsList: location[] = [
  {
    name: 'Cristo Redentor',
    image: 'https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Brasil',
    price: 500,
    descrition:
      ' Situado no topo do Corcovado, no Rio de Janeiro, esta estátua imponente representa o símbolo da fé e da beleza. Com os braços abertos, oferece uma vista panorâmica da cidade maravilhosa e recebe visitantes de todo o mundo.'
  },
  {
    name: 'Machu Picchu',
    image: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Peru',
    price: 600,
    descrition:
      'Machu Picchu: antiga cidade inca nas montanhas dos Andes, Peru. Arquitetura impressionante, localização remota e paisagens deslumbrantes fazem dela um dos destinos mais visitados do mundo.'
  }
  ,{
    name: 'Petra',
    image: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Jordânia',
    price: 800,
    descrition:
      ' Esta antiga cidade esculpida nas rochas, que já foi a capital do reino nabateu, é um tesouro arqueológico. Suas impressionantes fachadas, como o icônico Tesouro, escondem ruínas bem preservadas de uma civilização perdida.'
  },
  {
    name: 'Coliseu',
    image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Roma',
    price: 1400,
    descrition:
      'O maior anfiteatro já construído, localizado em Roma, é um símbolo do Império Romano. Com sua arquitetura impressionante e histórias de batalhas épicas e espetáculos, o Coliseu atrai visitantes em busca de uma conexão com o passado.'
  },
  {
    name: 'Chichén Itzá',
    image: 'https://images.pexels.com/photos/11801485/pexels-photo-11801485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'México',
    price: 500,
    descrition:
      'Esta antiga cidade maia é conhecida pela pirâmide de Kukulcán, também chamada de El Castillo. É um exemplo notável da arquitetura e da astronomia maia, além de um importante sítio arqueológico.'
  },
  {
    name: 'Taj Mahal ',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Índia',
    price: 900,
    descrition:
      'Considerado uma das maravilhas mais românticas do mundo, o Taj Mahal é um mausoléu construído em mármore branco. Sua beleza arquitetônica e os detalhes intrincados fazem dele um símbolo de amor eterno e um destino imperdível na Índia.'
  }
]
