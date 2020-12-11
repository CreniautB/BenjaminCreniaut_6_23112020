const tagLi = document.querySelectorAll(".tag")

tagLi.forEach(tag => {
    tag.addEventListener("click", function(e){

        e.preventDefault()

        const section = document.querySelectorAll("section")
        const classTag = tag.classList[0]

        section.forEach(photographer => {
            if ( photographer.classList.contains(classTag) == true ){
                photographer.style.display = "block"
            }
            else 
            {
                photographer.style.display = "none"
            }
        })
    })
});