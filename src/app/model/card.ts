
//MODEL DE COMO UM "CARD" DEVE SER (tipo um 'DTO'):
export class Card{
  id: string; //se não colocarmos o construtor, fica aparecendo erro querendo que coloque "| undefined" em cada variáve. AO criar o construtor, estamos inicializando a variável, daí ela não pode mais ser undefined.
  name: string;
  text?: string;
  image?: string;

  constructor(id: string, name: string, text?: string, image?: string){
    this.id = id;
    this.name = name;
    this.text = text;
    this.image = image;

    //DICA: ao inicializar as variáveis elas não podem mais ser undefined. Erro consertado.
  }
}
