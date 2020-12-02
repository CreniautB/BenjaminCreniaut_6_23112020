
fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {

      longID = window.location.search

      photographersId = longID.substr(1);

      let photographersByID = data["photographers"].filter(function (e) {
        return e.id == photographersId;
      });
      
      console.log(photographersByID);

      document.querySelector(".photographerName").innerHTML = photographersByID[0].name;
      document.querySelector(".photographerLocation").innerHTML = photographersByID[0].city + photographersByID[0].country;
      document.querySelector(".photographerTagLine").innerHTML = photographersByID[0].tagline;
      document.querySelector(".photographerPortrait").src = "Photos/PhotographersPhotos/" + photographersByID[0].portrait;
  

      let mediaPhoto = data["media"].filter(function (e) { 
         return e.photographerId == photographersId;
      });


      console.log(mediaPhoto);

      var model = document.querySelector(".photoContainer");

      mediaPhoto.forEach(element => {

          var clone = model.cloneNode(true);

          document.querySelector(".gallery").appendChild(clone);

          clone.id = element["id"]
    
          console.log(element.video)

          if ( element.image === undefined )
          {
            let video = document.createElement("VIDEO");
            let videoSource = document.createElement("SOURCE");
            videoSource.src = "Photos/"+element.photographerId+"/"+element.video;
            video.setAttribute("autoplay", "true")
            clone.appendChild(video)
            video.appendChild(videoSource)
          }
          
          else 
          {
            let image = document.createElement("IMG");
            image.src = "Photos/"+element.photographerId+"/"+element.image;
            clone.appendChild(image)
          }
     
      },
  )
})
