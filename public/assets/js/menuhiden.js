let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY;

  console.log(`Scroll position: ${scrollPosition}`);

  if (scrollPosition > 100 && scrollPosition > lastScrollPosition) {
    // User is scrolling down
    if (!header.classList.contains('hidden')) {
      header.classList.add('hidden');
      console.log('Adding hidden class');
    }
  } else {
    // User is scrolling up or is near the top
    if (header.classList.contains('hidden')) {
      header.classList.remove('hidden');
      console.log('Removing hidden class');
    }
  }

  lastScrollPosition = scrollPosition;
});
