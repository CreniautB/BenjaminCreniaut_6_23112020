fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    

    .then ((data) => {
      
        var model = document.querySelector("#card");

        data["photographers"].forEach(element => {
            
            document.querySelector("#card a h2").innerHTML = element["name"];
            document.querySelector("#card a div img").src = "Photos/PhotographersPhotos/" + element['portrait'];
            document.querySelector("#card h3").innerHTML = element["country"] +", " + element["city"];
            document.querySelector("#card p").innerHTML = element["tagline"];
            document.querySelector("#card small").innerHTML = element["price"] + "€/Jour";
                       
            var clone = model.cloneNode(true);
                        
            clone.id = element["id"];
                       
            document.querySelector("main").appendChild(clone);
                
        }
    )})



