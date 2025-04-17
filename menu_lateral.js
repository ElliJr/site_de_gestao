
  // Alternar tema claro/escuro
  const btn = document.getElementById('toggleTheme');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  });

  // Alternar menu lateral
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
