/***********recuperation de la balise canvas***********************/
var canvas = document.getElementById("view");
var ctx = canvas.getContext("2d");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

/*************tableau contenant toutes les gouttes*******************/
var goutte = [];
for (var i = 0; i < 600; i++) { goutte[i] = new Goutte(); };

/**********affichage du tableau contenat 600 gouttes*************/
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < goutte.length; i++) { goutte[i].draw(); goutte[i].tombe(); };
    window.requestAnimationFrame(draw);
    };

/************déclaration du constructeur et de ses propriétés*******/
function Goutte() {
    this.x= Math.random()* (canvas.width-1);
    this.y= Math.random()* (-canvas.height - 1);
    this.width= 1.5;
    this.height= 5;
    this.color= "aqua";
    this.dy= Math.random() * (5-2) + 2;

/**************fonction pour dessinner la goutte**********************/
    this.draw= function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        };

/***************fonction pour faire tomber la goutte******************/					
    this.tombe= function() {
        this.y += this.dy;
        if (this.y > canvas.height){
            this.y = 0;
        };
    };
};
    
window.requestAnimationFrame(draw);