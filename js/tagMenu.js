const tagLi = document.querySelectorAll(".tag")
var bool = new Boolean
bool = false

tagLi.forEach(tag => {
    tag.addEventListener("click", function(e){

        e.preventDefault()

        const section = document.querySelectorAll(".clone")
        const classTag = tag.classList[0]
        
        if ( bool === false)
        {
            section.forEach(photographer => {
                if ( photographer.classList.contains(classTag) == true ){
                    photographer.style.display = "block";
                }
                else 
                {
                    photographer.style.display = "none";
                }
            })
            bool = true
            console.log(bool)
        }

        else {
            section.forEach(photographer => {
                photographer.style.display = "block";
            })
            bool = false
            console.log(bool)
        }

    })
});