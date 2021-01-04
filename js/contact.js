var btn = document.querySelector("#btnContact")

btn.addEventListener("click", function(e)
{
    e.preventDefault()

    document.querySelector(".bgform").style.display = "block";
    
    var opacs = document.querySelectorAll("section, header")
    opacs.forEach.call(opacs, function(opac){
        opac.style.opacity = "0.5";
    })

});

document.querySelector("#closeForm").addEventListener("click", function(e){
    e.preventDefault()

    document.querySelector(".bgform").style.display = "none";
    var opacs = document.querySelectorAll("section, header")
    opacs.forEach.call(opacs, function(opac){
        opac.style.opacity = "1";
    })

});

document.querySelector('#formulaire').addEventListener('submit', function(e) {

    e.preventDefault();
    datas = document.querySelectorAll(".datas")

    datas.forEach(element => {
        console.log(element.value);
    })

   
});