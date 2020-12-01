
function getCookie(id){
    if(document.cookie.length == 0)
      return null;

    var regSepCookie = new RegExp('(; )', 'g');
    var cookies = document.cookie.split(regSepCookie);

    for(var i = 0; i < cookies.length; i++){
      var regInfo = new RegExp('=', 'g');
      var infos = cookies[i].split(regInfo);
      if(infos[0] == id){
        return unescape(infos[1]);
      }
    }
    return null;
  }

  var photographersId = getCookie('id')



fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {

      let photographersByID = data["photographers"].filter(function (e) {
        return e.id == photographersId;
      });
      
      console.log(photographersByID);

      document.querySelector("#photographerName").innerHTML = photographersByID[0].name;
      document.querySelector("#photographerLocation").innerHTML = photographersByID[0].city + photographersByID[0].country;
      document.querySelector("#photographerTagLine").innerHTML = photographersByID[0].tagline;
      document.querySelector("#photographerPortrait").src = "Photos/PhotographersPhotos/" + photographersByID[0].portrait;
  

      let mediaPhoto = data["media"].filter(function (e) { 
         return e.photographerId == photographersId;
      });


      console.log(mediaPhoto);

      var model = document.querySelector("#galleryCard");

      mediaPhoto.forEach(element => {

        image = document.querySelector("#galleryCard");
        image = document.createElement("IMG");
        document.querySelector("#galleryCard img").src = "Photos/"+element.photographerId+"/"+element.image;
    
        var clone = model.cloneNode(true);

        document.querySelector("#gallery").appendChild(clone);


      },
  )
})
