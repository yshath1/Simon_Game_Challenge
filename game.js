//start game
$(document).keydown(function (e){
    //flash div color function called
    flash(randomColor)
    //while loop while game is on
    var gameOn=1;
    $("h1").text("Level "+gameOn)
    while(gameOn>0){
        var i=1
        
        $("h1").text("Level "+i)
        flash(randomColor)
        
        $(".btn").on("click",function (e) {
            var clickedColor=e.target.id;
            playSounds(clickedColor);
            if (clickedColor===randomColor) {
                $("h1").text("Level "+i)
                i++
                gameOn++
                randomColor=nextSequence()
                console.log("yes",gameOn,randomColor);
                flash(randomColor)
                playSounds(clickedColor);
            }else{
                gameOn=0
                $("h1").text("Game over, Press Any Key to Restart")
                
                $("body").addClass("game-over")
            setTimeout(function(){
           $("body").removeClass("game-over")
            },100);
                console.log("nop");
            }
        });
        gameOn=0 
       
      }
    

})

//random color generation
function nextSequence(){
    var randomNumber =Math.floor(Math.random() * 4);
    var allColors=["green","blue","red","yellow"]
    randomNumber=allColors[randomNumber]
    return randomNumber
}
randomColor=nextSequence()



//Flash red background when player choose wrong
function flash(item) {
    $("#"+item).addClass("pressed")
    setTimeout(function(){
        $("#"+item).removeClass("pressed")
    },100);
}

//Play different sound according to the color choosed
function playSounds(key){
    flash(key)
switch (key) {
    case "green":
        var green=new Audio('sounds/green.mp3');
        green.play();
        
    break;
    case "red":
        var red=new Audio('sounds/red.mp3');
        red.play();
    break;
    case "yellow":
        var yellow=new Audio('sounds/yellow.mp3');
        yellow.play();
    break;
    case "blue":
        var blue=new Audio('sounds/blue.mp3');
        blue.play();
    break;
    default:
        break;
}
}



