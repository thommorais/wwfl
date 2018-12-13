import { carouselOptions } from '../constants'

export default function gameCarousel(Swiper) {
  const carouselContainer = document.querySelector('.swiper-container')
  const carousel = new Swiper(carouselContainer, carouselOptions)
  return carousel
}
