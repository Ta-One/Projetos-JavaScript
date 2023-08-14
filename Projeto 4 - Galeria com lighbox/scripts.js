//selecionar os itens
const galleryItems = document.querySelectorAll(".gallery-item")
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const lightboxClose = document.querySelector(".lightbox-close")

// fazer função de abrir o lightbox
galleryItems.forEach((item) => {

    item.addEventListener("click", () => {
        const imageUrl = item.querySelector(".gallery-image").getAttribute("data-src")
        lightboxImage.setAttribute("src", imageUrl)
        lightbox.style.display = "flex"
    })
})

// fazer a função para fechar o lightbox
lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none"
})

