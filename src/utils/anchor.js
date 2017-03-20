export default {
  adjust () {
    const anchors = document.querySelectorAll('.header-anchor')
    const basePath = window.location.href

    anchors.forEach((a) => {
      a.href = basePath + a.getAttribute('href')
    })
  }
}
