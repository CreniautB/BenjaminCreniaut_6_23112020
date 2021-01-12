fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {
      
        var model = document.querySelector("#card");

        data["photographers"].forEach(element => {
           
            /** Ajout dynamique des carte photographes */
            var clone = model.cloneNode(true);
            clone.id = element["id"];
            document.querySelector("main").appendChild(clone);

            clone.querySelector(".name").innerHTML = element["name"];
            clone.querySelector(".portrait").src = "Photos/PhotographersPhotos/" + element['portrait'];
            clone.querySelector(".portrait").alt = element["name"];
            clone.querySelector(".location").innerHTML = element["country"] +", " + element["city"];
            clone.querySelector(".tagLine").innerHTML = element["tagline"];
            clone.querySelector(".price").innerHTML = element["price"] + "€/Jour";
            clone.classList.add("clone")

            for ( let i = 0; i < element["tags"].length; i++) {
                var tags = document.createElement("LI");
                tags.innerHTML = "# "+element.tags[i];
                tags.classList.add(element.tags[i]);       
                tags.classList.add("tag")        
                clone.querySelector(".tagList").appendChild(tags);
                clone.classList.add(element.tags[i])};   


            let urlData = 'photographers.html?'+"id="+clone.id
            clone.querySelector("a").href = urlData
        })
    })
    window.addEventListener('scroll', function(e){       
        if ( window.scrollY != 0 )
        {
            document.querySelector("#mainContentLink").style.display = "block";
        }
        else
        {
            document.querySelector("#mainContentLink").style.display = "none";
        }
    })

/** Appel des fichiers javascript */
    
var js = document.createElement("script");
js.src = "js/tagMenu.js";
document.body.appendChild(js);
