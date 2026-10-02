import { useEffect, useState } from 'react';
import '../../assets/style/ButtonTheme.css';

function ButtonThame() {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const sunIcon = () => {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="theme-icon"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.93 19.07 1.41-1.41" />
        <path d="m17.66 6.34 1.41-1.41" />
      </svg>
    );
  };

  const moonIcon = () => {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="theme-icon"
      >
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />
        <path d="M18 3v2" />
        <path d="M17 4h2" />
      </svg>
    );
  };

  return (
    <button
      type="button"
      className={ `theme-toggle ${isDark ? 'dark' : 'light'}` }
      onClick={ toggleTheme }
      aria-label={ isDark ? 'Ativar tema claro' : 'Ativar tema escuro' }
      aria-pressed={ isDark }
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__label">
          {isDark ? (
            <>
              <span>DARK</span>
              <span>MODE</span>
            </>
          ) : (
            <>
              <span>LIGHT</span>
              <span>MODE</span>
            </>
          )}
        </span>
        <span className="theme-toggle__knob">
          {isDark ? (
            moonIcon()
          ) : (
            sunIcon()
          )}
        </span>
      </span>
    </button>
  );
}

export default ButtonThame;
