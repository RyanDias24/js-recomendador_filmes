let campoIdade;
let filme;
let campoAcao;
let campoTerror;
let campoRomance;


function setup() {
  createCanvas(600, 400);
  let idades;
  createElement('h2','Recomendar de Filmes')
  createSpan('idade: ')
  campoIdade = createInput('');
  createElement('h2', 'Escolha apenas um gênero')
  campoAcao = createCheckbox('Ação');
  campoTerror = createCheckbox('Terror');
  campoRomance = createCheckbox('Romance');
}

function draw() {
  textAlign(CENTER,CENTER);
  textSize(40)
  fill('white')
  background('black')
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let terror = campoTerror.checked();
  let  romance = campoRomance.checked();

  filme = geraRecomendacao(idade, acao, terror, romance);
  
  text(filme, width/2, height/2)
}

function geraRecomendacao(idade, acao, terror, romance){
  if(idade >= 18){
    if(acao){
      return "Bastardos Inglória";
    }else if (terror){
      return "Annabelle";
    }else if(romance){
    return '500 Dias Com Ela';
    }else{
      return 'Senhor dos Aneis';
    }
  }else if(idade >= 12){
    if(acao){
      return "Bad Boys";
    }else if (terror){
      return "Coraline e o mundo secreto";
    }else if(romance){
    return 'Titanic';
    }else{
    return 'As Branquelas';
    }
  }else if(idade <= 11){
    if(acao){
      return "Tom e Jerry";
    }else if (terror){
      return "A casa monstro";
    }else if(romance){
    return 'Uma linda vida';
    }else{
    return "Carros";
  }
 }
}
