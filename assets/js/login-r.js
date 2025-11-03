// Seleção de elementos
const telaLoginRegistro = document.querySelector('#tela-login-registro');
const btnLogin = document.querySelector('#btn-login');
const btnRegistro = document.querySelector('#btn-registro');

const loginContainer = document.querySelector('#login');
const registerContainer = document.querySelector('#criar-conta');

const formLogin = loginContainer.querySelector('form');
const formRegister = registerContainer.querySelector('form');

// Criar elemento de mensagem de login
const loginMsg = document.createElement('div');
loginMsg.id = 'login-msg';
loginMsg.style.cssText = `
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #f87171;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1000;
`;
document.body.appendChild(loginMsg);

// Alternar telas de login/registro
btnRegistro.addEventListener('click', () => telaLoginRegistro.classList.add('ativo'));
btnLogin.addEventListener('click', () => telaLoginRegistro.classList.remove('ativo'));

// ===== LOGIN (Admin) =====
formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = loginContainer.querySelector('#email').value.trim();
  const password = loginContainer.querySelector('#senha').value.trim();

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.ok) {
      telaLoginRegistro.classList.add('ativo'); // animação de transição
      setTimeout(() => window.location.href = data.redirect, 500);
    } else {
      loginMsg.textContent = data.msg;
      loginMsg.style.opacity = 1;
      setTimeout(() => loginMsg.style.opacity = 0, 4000);
    }
  } catch (err) {
    loginMsg.textContent = 'Error connecting to the server.';
    loginMsg.style.opacity = 1;
    setTimeout(() => loginMsg.style.opacity = 0, 4000);
    console.error(err);
  }
});

// ===== REGISTER (Público, sem senha/nome/email) =====
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  // Redireciona direto para o dashboard
  window.location.href = '/assets/dashboard/dash.html';
});
