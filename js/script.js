$(window).scroll(function (event) {
    var y = $(this).scrollTop();

    if (y <= 10) {
        $('.triangleLeft').addClass('animate');
    }
    else
    {
        $('.triangleLeft').removeClass('animate');                
    }
});

$(window).scroll(function (event) {
    var y = $(this).scrollTop();

    if (y <= 15) {
        $('.triangleRight').addClass('animate');
    }
    else
    {
        $('.triangleRight').removeClass('animate');                
    }
});


$(window).scroll(function (event) {
    var y = $(this).scrollTop();

    if (y <= 700) {
        $('#headerContainer').removeClass('menuScroll ');
    }
    else
    {
        $('#headerContainer').addClass('menuScroll ');                
    }
});








var status = "less";

function toggleText()
{
    var text="<br>Bonjour, nous sommes Old Time Gringo et tu veux en savoir plus sur nous...<br> Notre musique, nous la voulons différente. La batterie de Zeppelin, la basse de Cinema Club et les guitares des Chili Peppers : ala Old Time Gringo.<br> Formé en 2014 à Paris, nous avons écumé les scènes d'Ile de France avant de sortir notre premier EP en Mars 2015.";
    
    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "Moins";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "Plus";
        status = "less"
    }
}