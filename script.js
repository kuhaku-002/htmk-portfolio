//$(".informazioni").addClass("visibile")
//$(".contatto").addClass("visibile")
//$(".skills").addClass("visibile")
//$(".progetti").addClass("visibile")

function Informatio(){
    $(".skills, .progetti").removeClass("visibile")
    $(".informazioni").addClass("visibile")
}
function Skill(){
    $(".informazioni, .progetti").removeClass("visibile")
    $(".skills").addClass("visibile")
}
function Project(){
    $(".skills, .informazioni").removeClass("visibile")
    $(".progetti").addClass("visibile")
}

