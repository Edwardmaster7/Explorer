$(document).ready(function(){
    // jQuery methods go here...
    
    $("#cookie").hover(function () {
        $(this).toggleClass("vibrate")
        $(this).click(handleClick)
    })

    $("body").addClass("color-change-2x")

    function toggleScreen(event) {
        // event.preventDefault()

        $(".screen1").hide()   
        $(".screen2").show(screen2())
    }
    
    function handleClick(event) {
        event.preventDefault()
        toggleScreen()
    }

    function screen2() {
        $(".card").toggleClass("slide-in-blurred-top")
    }
    
    

  });