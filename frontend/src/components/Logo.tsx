// The official brand emblem (white mark on transparent, sized for the dark
// theme). Imported once here so every usage — header, footer — stays in sync.
// A placeholder `CTCG_Logo.svg` remains in this folder for reference only.
import logo from '../assets/logo/CTCG_Logo.png';

interface LogoProps {
  /** Pixel height of the emblem; width scales proportionally. */
  size?: number;
  /** Show the wordmark next to the emblem (header/footer use this). */
  withWordmark?: boolean;
  className?: string;
}

export default function Logo({
  size = 44,
  withWordmark = true,
  className = '',
}: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="Chukuta Tactical Consulting Group"
        height={size}
        width={size}
        style={{ height: size, width: 'auto' }}
        className="shrink-0"
      />
      {withWordmark && (
        <span className="text-sm font-semibold leading-tight">
          Chukuta Tactical
          <span className="block text-xs font-medium text-ink-muted">
            Consulting Group™
          </span>
        </span>
      )}
    </span>
  );
}
