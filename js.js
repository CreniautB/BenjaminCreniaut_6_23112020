fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {
        
        
        for (var i = 0; i < data['photographers'].length; i++ ) {

            var list = document.createElement("LI");
            document.querySelector('#listPhotographers').appendChild(list);

            var link = document.createElement("a");

           
    
            list.appendChild(link)
            

            var photoPortrait = document.createElement("img");
            photoPortrait.src = "Photos/PhotographersPhotos/" + data['photographers'][i]['portrait'];
            link.appendChild(photoPortrait)
         
            var name = document.createElement('h1');
            name.innerHTML = data['photographers'][i]['name'];
            link.appendChild(name)
          
           
            var localisation = document.createElement('h2');
            localisation.innerHTML = data['photographers'][i]['country'] + ", " + data['photographers'][i]['city'];
            link.appendChild(localisation)

            var tagline = document.createElement('p');
            tagline.innerHTML = data['photographers'][i]['tagline'];
            link.appendChild(tagline)

            var price = document.createElement('small');
            price.innerHTML = data['photographers'][i]['price'] + "€/jour";
            link.appendChild(price)

            document.querySelector("#listPhotographers li").addEventListener("click", photographersPage);

            function photographersPage(e) {
                e.preventDefault();

                var photographer = data['photographers'][i]['id'];

                console.log(photographer)
            }
            }
        })


    

