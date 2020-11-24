fetch('jsonSource.json')
    .then((response) => {
        return response.json()
    })

    .then ((data) => {

        var testa = document.querySelector("#idp")

        testa.innerHTML = data["photographers"][0]["name"]



    }
 )



