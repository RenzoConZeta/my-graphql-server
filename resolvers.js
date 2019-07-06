class Cliente {
  constructor(id, { nombre, apellido, empresa, emails, edad, tipo, pedidos }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.empresa = empresa;
    this.emails = emails;
    this.edad = edad;
    this.tipo = tipo;
    this.pedidos = pedidos;
  }
}

const clientesDB = {};

const resolvers = {
  getCliente : ({id}) => {
    return new Cliente(id, clientesDB[id]);
  },
  cliente: () => {
    return {
      "id": 2341234234,
      "nombre": "Jose",
      "apellido": "Ramos",
      "empresa": "Teranvo",
      "email": "tupaquequieressabereso@gmail.com"
    }
  },
  crearCliente: ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex');
    clientesDB[id] = input;
    return new Cliente(id, input);
  }
}

export default resolvers;