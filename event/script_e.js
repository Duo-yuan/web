const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

window.addEventListener("scroll", function () {
  const sidebar = document.querySelector('.sidebar');
  const scrollY = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;

  const scrollPercent = (scrollY + viewportHeight) / scrollHeight;

  const isDesktop = window.innerWidth >= 768;

  if (isDesktop && scrollPercent > 0.95) {
    sidebar.classList.add('hide');
  } else {
    sidebar.classList.remove('hide');
  }
});

window.addEventListener("scroll", function () {
  const image = document.getElementById('myImage');
  const scrollY = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;

  const scrollPercent = (scrollY + viewportHeight) / scrollHeight;

  if (scrollPercent > 0.15) {
    image.classList.add('visible');
  } else {
    image.classList.remove('visible'); // 回到小於10%，隱藏圖片
  }
});
