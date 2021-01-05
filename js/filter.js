btn = document.querySelector('#filterMenu');
let bool = new Boolean
bool =  false

/** Ouverture du menu filtre */
btn.addEventListener('click', function(e){

    btnF = document.querySelectorAll(".hideBtn")
    bntMain = document.querySelector("#btnFilterMain")
    btnLast = document.querySelector("#titleFilter")
   
    if ( bool == false)
    {
        bntMain.style.borderBottomLeftRadius = "0"
        bntMain.style.borderBottomRightRadius = "0"
        btnLast.style.borderBottomLeftRadius = "5px"
        btnLast.style.borderBottomRightRadius = "5px"
        btnF.forEach(element => {
        element.style.display = "block";})
    bool = true
    }
    else 
    {
        bntMain.style.borderBottomLeftRadius = "5px"
        bntMain.style.borderBottomRightRadius = "5px"
        btnF.forEach(element => {
            element.style.display = "none";})
        bool = false
    }});


article = document.querySelectorAll('.photoContainer')
array = []
article.forEach(element => {
    array.push(element)
});

/** Trier Par Like */
buttonPop = document.querySelector("#popFilter")
buttonPop.addEventListener('click', function(e)
{
    array.sort(function(a, b) {
      return b.dataset.like - a.dataset.like;
    });
    
    for ( i = 0 ; i < array.length; i++)
    {
        test =  document.getElementById(array[i]["id"])
        if ( array[i].id == test.id){
            test.style.order = i
        }
    }    
})
/** Trier par Titre */
buttonTitle = document.querySelector('#titleFilter')
buttonTitle.addEventListener('click', function(e)
{
    array.sort(function (a, b) {
        if (a.dataset.title > b.dataset.title) {
            return 1;
        }
        if (b.dataset.title > a.dataset.title) {
            return -1;
        }
        return 0;
    });
      
      for ( i = 0 ; i < array.length; i++)
      {
          test =  document.getElementById(array[i]["id"])
          if ( array[i].id == test.id){
              test.style.order = i
          }
      }
})

/** Trier par date */
buttonDate = document.querySelector('#dateFilter')
buttonDate.addEventListener('click', function(e)
{
    array.sort(function(a, b) {
        a = new Date(a.dataset.date);
        b = new Date(b.dataset.date);
        return a>b ? -1 : a<b ? 0 : 1;
    });

    for ( i = 0 ; i < array.length; i++)
    {
        test =  document.getElementById(array[i]["id"])
        if ( array[i].id == test.id){
            test.style.order = i
        }
    }
})