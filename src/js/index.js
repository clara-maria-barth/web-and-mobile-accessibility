$(document).ready(function(){
    var fontSize = parseInt($('#root').css('font-size'));
    $('button').on("click", function(){
        if (this.id == "font-increase-button-1") {
            fontSize+=5;
        }
        if (this.id == "font-decrease-button-1") {
            fontSize-=5;
        }
    $('#root').css('font-size',fontSize+'px');
})
})