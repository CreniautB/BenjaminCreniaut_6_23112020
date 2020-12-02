fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    

    .then ((data) => {
      
        var model = document.querySelector("#card");

        data["photographers"].forEach(element => {
           
            var clone = model.cloneNode(true);
                        
            clone.id = element["id"];
                       
            document.querySelector("main").appendChild(clone);


            clone.querySelector(".name").innerHTML = element["name"];
            clone.querySelector(".portrait").src = "Photos/PhotographersPhotos/" + element['portrait'];
            clone.querySelector(".location").innerHTML = element["country"] +", " + element["city"];
            clone.querySelector(".tagLine").innerHTML = element["tagline"];
            clone.querySelector(".price").innerHTML = element["price"] + "€/Jour";


            for ( let i = 0; i < element["tags"].length; i++) {
            
                var tags = document.createElement("LI");
                tags.innerHTML = element.tags[i];               
                clone.querySelector(".tagList").appendChild(tags);

            };   

           clone.querySelector("a").addEventListener("click", function(e) {

                let urlData = new URL('http://127.0.0.1:5500/photographers.html');
             
                urlData.search = clone.id

                console.log(urlData)

                console.log(clone.id+"lol")

               window.location = urlData;

           }   )
        },
    )
    })
    


