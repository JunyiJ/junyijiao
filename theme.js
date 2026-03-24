(function () {
  const KEY = 'jj-theme';
  const root = document.documentElement;

  function apply(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }

  const saved = localStorage.getItem(KEY);
  if (saved === 'dark' || saved === 'light') {
    apply(saved);
  } else {
    apply('light');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const nowDark = root.getAttribute('data-theme') === 'dark';
      const next = nowDark ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      apply(next);
    });
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    apply(current);
  });
})();
