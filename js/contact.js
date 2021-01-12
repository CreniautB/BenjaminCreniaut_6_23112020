
/** Ouverture du forumaire lors du clic */
var btn = document.querySelector("#btnContact")
btn.addEventListener("click", function(e)
{
    e.preventDefault()

    document.querySelector(".bgform").style.display = "block";
    
    var opacs = document.querySelectorAll("section, header, main")
    opacs.forEach.call(opacs, function(opac){
        opac.style.opacity = "0.5";
        window.scrollTo(0, 0);
    })

});

/** Fermeture du forumlaire */
document.querySelector("#closeForm").addEventListener("click", function(e){
    e.preventDefault()

    document.querySelector(".bgform").style.display = "none";
    var opacs = document.querySelectorAll("section, header, main")
    opacs.forEach.call(opacs, function(opac){
        opac.style.opacity = "1";
    })

});

/** Récuperation des données du form dans la console */
document.querySelector('#formulaire').addEventListener('submit', function(e) {
    e.preventDefault();
    datas = document.querySelectorAll(".datas")
    datas.forEach(element => {
        console.log(element.value);
    })
    document.querySelector(".bgform").style.display = "none";
    document.querySelector(".bgform").style.display = "none";
    var opacs = document.querySelectorAll("section, header, main")
    opacs.forEach.call(opacs, function(opac){
        opac.style.opacity = "1";
    })
});