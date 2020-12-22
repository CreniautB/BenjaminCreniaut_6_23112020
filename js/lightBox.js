
/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url Image actuellement affichée
 **/
class Lightbox {

  static init() {
    const links = Array.from(document.querySelectorAll('.media'))
    const gallery = links.map(link => link.getAttribute('href'))
    links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'), gallery)
      }))
  }

  /**
   * @param {string} url URL de l'image
   * @param {string[]} images Chemins des images de la lightbox
   */
  constructor(url, images) {
    this.element = this.buildDOM(url)
    this.images = images
    this.displayImage(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  /**
   * @param {string} url URL de l'image
   */

  displayImage (url) {
    
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox__container')


    if ( url.substr(-4) == ".mp4" )
    {
      container.innerHTML = ""
      const video = document.createElement("video")
      const source = document.createElement("source")
      container.appendChild(video)
      video.appendChild(source)
      video.setAttribute("controls", "true")
      this.url = url
      source.src = url
      
    }
    else {        
      container.innerHTML = ""
      container.appendChild(image)
      this.url = url
      image.src = url
    } 
  }

  /**
   * @param {KeyboardEvent} e 
   */
  onKeyUp (e) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    }
  }
  /**
   * Ferme la ligthbox
   * @param {MouseEvent|KeyboardEvent} e 
   */
  close (e) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
  next (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === this.images.length - 1) {
      i = -1
    }
    this.displayImage(this.images[i + 1])
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
  prev (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === 0) {
      i = this.images.length
    }
    this.displayImage(this.images[i - 1])
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<button class="lightbox__close"><i class="fas fa-times"></i></button>
        <button class="lightbox__next"><i class="fas fa-angle-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-angle-left"></i></button>
        <div class="lightbox__container"></div>`
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    return dom
  }

}

Lightbox.init()