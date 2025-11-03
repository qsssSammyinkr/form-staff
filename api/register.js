// api/register.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, msg: 'Method not allowed' });
  }

  const { name, surname, email, password } = req.body;

  // Optional: prevent registering admin email
  if (email === process.env.ADMIN_EMAIL) {
    return res.status(400).json({ ok: false, msg: 'Email reserved.' });
  }

  // Aqui você salvaria no DB. Exemplo simples (não persistente):
  // (em produção: hash da senha + salvar em DB)
  // Para demo, apenas responde sucesso:
  return res.status(200).json({ ok: true, redirect: '/assets/dashborad/dash.html.html' });
}
