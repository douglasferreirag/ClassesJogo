
class Heroi {

    


    constructor(nome,idade, tipo){

        this.nome = nome;

        this.idade = idade;

        this.tipo = tipo;

       

        
    }

  

    atacar(){

            
            console.log('Iniciando ataque ...')

            var ataque = ""
            
            switch(this.tipo){

                case "mago":{

                    ataque = "magia"

                    break

                }

                 case "guerreiro":{

                    ataque = "espada"

                    break

                }

                 case "monge":{

                    ataque = "artes marciais"

                    break

                }

                default:{

                    ataque = "shuriken"

                    break


                }



            }

            console.log("O " + this.tipo + " atacou usando " +  ataque)
            

    
    
    }


    
   
   


}




var tipo = ["mago", "guerreiro", "monge", "ninja"]


for (let i = 0; i < tipo.length; i++){


    var heroi = new Heroi("Heroi" + i, i+10, tipo[i]);

    heroi.atacar();

}


