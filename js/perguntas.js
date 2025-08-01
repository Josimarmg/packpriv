
  // Acordeão
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  const body = document.body;
  const toggle = document.getElementById('toggleMode');

  // Verifica se há preferência salva
  const savedMode = localStorage.getItem('modo');
  if (savedMode) {
    body.classList.add(savedMode);
  } else {
    // Detecta horário se não houver preferência
    const hora = new Date().getHours();
    const modoAuto = hora >= 18 || hora < 6 ? 'dark-mode' : 'light-mode';
    body.classList.add(modoAuto);
    localStorage.setItem('modo', modoAuto);
  }

  // Alternância manual
  toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    const novoModo = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('modo', novoModo);
  });