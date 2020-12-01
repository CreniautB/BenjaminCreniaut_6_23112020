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

            
            for ( let i = 0; i < element["tags"].length; i++) {
              
                console.log(element.tags[i])

                var tags = document.createElement("LI");
                tags.innerHTML = element.tags[i];

                console.log(tags)
               
                document.querySelector("#card ul").appendChild(tags);

            }; 


            var clone = model.cloneNode(true);
                        
            clone.id = element["id"];
                       
            document.querySelector("main").appendChild(clone);
                
        },


    )})

    

    function getId(id) {
        document.cookie= "id="+id; 
    };

