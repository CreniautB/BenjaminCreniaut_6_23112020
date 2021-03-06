
fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {

      /** Récupération Id et Proil Photographe */
      longID = window.location.search
      photographersId = longID.substr(4);
      let photographersByID = data["photographers"].filter(function (e) {
        return e.id == photographersId;
      });
      let mediaPhoto = data["media"].filter(function (e) { return e.photographerId == photographersId;});

      
      /** Ajout dynamique du profil Photographe */
      let count = 0
      let totalLikes = 0
      mediaPhoto.forEach(element => {totalLikes += element.likes})

      document.querySelector(".photographerName").innerHTML = photographersByID[0].name;
      document.querySelector(".photographerLocation").innerHTML = photographersByID[0].city+", " + photographersByID[0].country;
      document.querySelector(".photographerTagLine").innerHTML = photographersByID[0].tagline;
      document.querySelector(".photographerPortrait").src = "Photos/PhotographersPhotos/" + photographersByID[0].portrait;
      document.querySelector(".photographerPortrait").alt = photographersByID[0].name;
      document.querySelector(".nameForm").innerHTML = photographersByID[0].name;
      document.querySelector("#totalLikes").innerHTML = totalLikes
      document.querySelector("#priceSpan").innerHTML = photographersByID[0].price + "€" + " / " + "jour"
  
      for ( let i = 0; i < photographersByID[0]["tags"].length; i++) {
        var tags = document.createElement("LI");
        tags.innerHTML = "# "+photographersByID[0].tags[i];               
        document.querySelector(".tagList").appendChild(tags);
      };

      /** Gallery Photos */
      var model = document.querySelector(".photoContainer");
      mediaPhoto.forEach(element => {

          var clone = model.cloneNode(true);
          document.querySelector(".gallery").appendChild(clone);
          clone.id = element["id"]

          clone.querySelector(".pricePhoto").innerHTML = element["price"]+" €"
          clone.querySelector(".titlePhoto").innerHTML = element["image"]
          clone.querySelector(".likeNb").innerHTML = element["likes"]
          clone.dataset.like = element["likes"]
          clone.dataset.title = element["image"]
          clone.dataset.date = element["date"]
          


          /** Incrémentation Likes */

          var like = new Boolean
          like = false
          
          clone.querySelector(".likeHeart").addEventListener("click", function(e){
            if (like == false){
              like = true
              clone.querySelector(".likeNb").innerHTML = element["likes"]+1
              count += 1      
              document.querySelector("#totalLikes").innerHTML = totalLikes + count
              console.log(count)

            }
            else {
              like = false
              clone.querySelector(".likeNb").innerHTML = element["likes"]
              count -= 1
              document.querySelector("#totalLikes").innerHTML = totalLikes + count

            }})

          /** Vérifiacation media Si photos Ou Video et ajout à la gallery */
            
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
              clone.dataset.title = element["video"]
          }
         
          if ( element.image === undefined )
          {
            let video = document.createElement("VIDEO");
            let videoSource = document.createElement("SOURCE");
            videoSource.src = "Photos/"+element.photographerId+"/"+element.video;
            video.setAttribute("autoplay", "true")
            video.setAttribute("aria-label", "ouvrir la video en grand")
            clone.querySelector(".media").appendChild(video)
            video.appendChild(videoSource)
            clone.querySelector(".media").href = "Photos/"+element.photographerId+"/"+element.video;

          }
          else 
          {
            let image = document.createElement("IMG");
            image.src = "Photos/"+element.photographerId+"/"+element.image;
            image.setAttribute("aria-label", "ouvrir la photo en grand")
            clone.querySelector(".media").appendChild(image)
            clone.querySelector(".media").href = "Photos/"+element.photographerId+"/"+element.image;
          }  
      },
  )




  /** Appel des fichiers javascript */

  var jslightBox = document.createElement("script");
  var jscontact = document.createElement("script");
  var jsfilter = document.createElement("script")
  
  jslightBox.src = "js/lightBox.js";
  jscontact.src = "js/contact.js";
  jsfilter.src = "js/filter.js";

  document.body.appendChild(jsfilter);
  document.body.appendChild(jscontact);
  document.body.appendChild(jslightBox);



})

