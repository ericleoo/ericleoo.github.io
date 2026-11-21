type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';
const root = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');

function isThemePreference(value: string | null | undefined): value is ThemePreference {
  return value === 'system' || value === 'light' || value === 'dark';
}

function getPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isThemePreference(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
}

function applyTheme(preference: ThemePreference) {
  const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;

  root.dataset.theme = resolved;
  root.dataset.themePref = preference;

  document.querySelectorAll<HTMLButtonElement>('[data-theme-value]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeValue === preference));
  });
}

function setupThemeSwitch() {
  applyTheme(getPreference());

  document.querySelectorAll<HTMLButtonElement>('[data-theme-value]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.themeValue;
      if (!isThemePreference(value)) return;

      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // Private browsing can reject storage writes. The theme still applies for this visit.
      }

      applyTheme(value);
    });
  });

  media.addEventListener('change', () => {
    if (getPreference() === 'system') applyTheme('system');
  });
}

function setupToc() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.toc a[href^="#"]'));
  if (!links.length) return;

  const linksById = new Map<string, HTMLAnchorElement[]>();
  for (const link of links) {
    const id = decodeURIComponent(link.hash.slice(1));
    const bucket = linksById.get(id) ?? [];
    bucket.push(link);
    linksById.set(id, bucket);
  }

  const headings = Array.from(
    document.querySelectorAll<HTMLElement>('.post-body h2[id], .post-body h3[id], .post-body h4[id]')
  );

  if (!('IntersectionObserver' in window) || !headings.length) return;

  const visible = new Set<Element>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }

      const active = headings.find((heading) => visible.has(heading));
      for (const [id, idLinks] of linksById.entries()) {
        for (const link of idLinks) {
          link.classList.toggle('is-active', active?.id === id);
        }
      }
    },
    { rootMargin: '-16% 0px -68% 0px' }
  );

  for (const heading of headings) observer.observe(heading);

  document.querySelectorAll<HTMLAnchorElement>('.toc-mobile a').forEach((link) => {
    link.addEventListener('click', () => {
      const details = link.closest('details');
      if (details) details.open = false;
    });
  });
}

function markExternalLinks() {
  document.querySelectorAll<HTMLAnchorElement>('.prose a[href^="http"]').forEach((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

setupThemeSwitch();
setupToc();
markExternalLinks();
