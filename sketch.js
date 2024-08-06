let xbolinha=300;
let ybolinha=200;
let diametro=20;
let yvelocidade=6;
let raio=diametro/2;
let xvelocidade=6;
let xraquete=10;
let yraquete=155;
let larguraraquete=10;
let alturaraquete=90;
let xraqueteoponente=580;
let yraqueteoponente=155;
let trilha
let ponto
let raquetada
let meuplacar=0
let placaroponente=0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenhabolinha()
  movimentodabolinha();
  verificarborda()
  desenharaquete(xraquete, yraquete);
  movimentodaraquete();
  desenharaquete(xraqueteoponente, yraqueteoponente);
  movimentoraqueteoponente()
  colisaoraquete()
  placar()
  contabilizaplacar()
  
  
}
  
function desenhabolinha(){
  circle (xbolinha, ybolinha, diametro)
}
    
function movimentodabolinha(){
  xbolinha += xvelocidade;
  ybolinha +=yvelocidade;
} 
function verificarborda(){
  if(xbolinha > (width-raio) || xbolinha<(0+raio)){
    xvelocidade=xvelocidade*(-1);
  }
  
  if(ybolinha > (height-raio) || ybolinha<(0+raio)){
    yvelocidade=yvelocidade*(-1);
  }
}
function desenharaquete(x,y){
  rect(x,y,larguraraquete,alturaraquete)
}       
function movimentodaraquete(){
  if(keyIsDown(UP_ARROW)){
   yraquete -= 10;
}
  if(keyIsDown(DOWN_ARROW)){
   yraquete += 10;
}
}
function movimentoraqueteoponente(){
   if(keyIsDown(87)){
   yraqueteoponente -= 10;
}
  if(keyIsDown(83)){
   yraqueteoponente += 10; 
  }
  
}
function colisaoraquete(){
  if(xbolinha-raio <= xraquete+larguraraquete &&
    ybolinha + raio >= yraquete &&
    ybolinha-raio <=yraquete+alturaraquete){
    xvelocidade *=-1
  }
  
  if(xbolinha+raio >= xraqueteoponente &&
    ybolinha + raio >= yraqueteoponente &&
    ybolinha-raio <=yraqueteoponente+alturaraquete){
    xvelocidade *=-1
  }
}

function placar(){
  fill('orange')
  rect(130,5,40,25);
  rect(430,5,40,25)
  fill(255);
  textSize(20)
  text(meuplacar, 150, 25)
  text(placaroponente, 450, 20)
  textAlign(CENTER)
}

function contabilizaplacar(){
 if(xbolinha-raio <=0){
   placaroponente +=1
 }
 if(xbolinha+raio >= width){
   meuplacar +=1
 }
}
 function preload(){
 trilha = loadSound("trilha.mp3") 

 }

