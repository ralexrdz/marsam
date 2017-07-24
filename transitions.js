document.addEventListener('DOMContentLoaded', function (event) {
  let swiper = new Swiper('#pager', {
    // pagination: '#pager-pagination',
    scrollbar: '#pager-scrollbar',
    direction: 'horizontal',
    paginationClickable: true,
    slidesPerView: 'auto',
    keyboardControl: true,
    mousewheelControl: true,
    parallax: true,
    freeMode: true,
    speed: 200
  })
  let swiperPasos = new Swiper('#pasos-swiper', {
    pagination: '#pasos-pagination',
    direction: 'horizontal',
    slidesPerView: 1,
    paginationClickable: true,
    nextButton: '#pasos-next',
    prevButton: '#pasos-prev'
  })
  let swiperDescripcion = new Swiper('#descripcion-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    nextButton: '#descripcion-next',
    prevButton: '#descripcion-prev',
    loop: true
  })
})
function abrePaginaCotiza () {
  document.getElementById('pagina-cotiza').className = 'active'
}
function closePaginaCotiza () {
  document.getElementById('pagina-cotiza').className = ''
}
function openMenu () {
  document.getElementById('menu').className = 'active'
}

function closeMenu () {
  document.getElementById('menu').className = ''
}

function onPaginatorDescripcionSelected (section) {
  let currentSection = swiperDescripcion.activeIndex > 3 ? 0 : swiperDescripcion.activeIndex
  swiperDescripcion.slideTo(section)
  switch (currentSection) {
    case 0:
        document.getElementById('personal').className = ''
      break
    case 1:
      document.getElementById('analytics').className = ''
      break
    case 2:
      document.getElementById('on').className = ''
      break
    case 3:
      document.getElementById('ruler').className = ''
      break
    default:

  }
  switch (section) {
    case 0:
      document.getElementById('personal').className = 'selected'
      break
    case 1:
      document.getElementById('analytics').className = 'selected'
      break
    case 2:
      document.getElementById('on').className = 'selected'
      break
    case 3:
      document.getElementById('ruler').className = 'selected'
      break
    default:

  }
}
