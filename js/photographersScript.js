
fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {

      longID = window.location.search

      photographersId = longID.substr(4);

      let photographersByID = data["photographers"].filter(function (e) {
        return e.id == photographersId;
      });
      
      console.log(photographersByID);

      document.querySelector(".photographerName").innerHTML = photographersByID[0].name;
      document.querySelector(".photographerLocation").innerHTML = photographersByID[0].city + photographersByID[0].country;
      document.querySelector(".photographerTagLine").innerHTML = photographersByID[0].tagline;
      document.querySelector(".photographerPortrait").src = "Photos/PhotographersPhotos/" + photographersByID[0].portrait;
  
      for ( let i = 0; i < photographersByID[0]["tags"].length; i++) {
            
        var tags = document.createElement("LI");
        tags.innerHTML = "# "+photographersByID[0].tags[i];               
        document.querySelector(".tagList").appendChild(tags);

      };

      let mediaPhoto = data["media"].filter(function (e) { 
         return e.photographerId == photographersId;
      });


      console.log(mediaPhoto);

      var model = document.querySelector(".photoContainer");

      mediaPhoto.forEach(element => {

          var clone = model.cloneNode(true);
          document.querySelector(".gallery").appendChild(clone);
          clone.id = element["id"]

          clone.querySelector(".pricePhoto").innerHTML = element["price"]+" €"
          clone.querySelector(".titlePhoto").innerHTML = element["image"]
          clone.querySelector(".likeNb").innerHTML = element["likes"]
        
          if ( element.video === undefined)
            {           
              preTitle = element.image 
              replaced =  preTitle.substring(0, preTitle.length - 4); 
              title = replaced.split('_').join(' ');
              document.querySelector(".titlePhoto").innerHTML = title
              clone.querySelector(".titlePhoto").innerHTML = title
            }
            
          else {
                        
              preTitle = element.video 
              replaced =  preTitle.substring(0, preTitle.length - 4); 
              title = replaced.split('_').join(' ');         
              clone.querySelector(".titlePhoto").innerHTML = title
          }
         
          if ( element.image === undefined )
          {
            let video = document.createElement("VIDEO");
            let videoSource = document.createElement("SOURCE");
            videoSource.src = "../Photos/"+element.photographerId+"/"+element.video;
            video.setAttribute("autoplay", "true")
            clone.querySelector(".media").appendChild(video)
            video.appendChild(videoSource)
            clone.querySelector(".media").href = "Photos/"+element.photographerId+"/"+element.video;

          }
          else 
          {
            let image = document.createElement("IMG");
            image.src = "../Photos/"+element.photographerId+"/"+element.image;
            clone.querySelector(".media").appendChild(image)
            clone.querySelector(".media").href = "Photos/"+element.photographerId+"/"+element.image;
          

          }

     
      },

   
      
  )

  var js = document.createElement("script");
  js.src = "js/lightBox.js";

  document.body.appendChild(js);



})


