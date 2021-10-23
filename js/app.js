const links = document.querySelector('.links')
const sections = document.querySelectorAll('.section')

console.log(sections)
// build nav links dynamically
sections.forEach((section) => {
  const name = section.id
  links.innerHTML += `<li class="link"><a class="${section.id}">${name}</a></li>`
})
// nav links scroll behavior
document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      document
        // @ts-ignore
        .querySelector(`#${event.target.className}`)
        .scrollIntoView({ behavior: 'smooth' })
    })
  })
  // highlight active section
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('highlighted')
        else entry.target.classList.remove('highlighted')
      })
    },
    { threshold: 1 }
  )
  sections.forEach((section) => observer.observe(section))