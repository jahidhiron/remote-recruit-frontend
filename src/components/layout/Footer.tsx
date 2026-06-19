
import footerBg from "@/assets/footer-bg-wave.png";
import footerLogo from "@/assets/footer-logo.png";
import rrIcon from "@/assets/rr-icon.png";

// Figma-exported 32×32 SVG social icons
import socialFacebook from "@/assets/social-facebook.svg";
import socialInstagram from "@/assets/social-instagram.svg";
import socialX from "@/assets/social-x.svg";
import socialTwitter from "@/assets/social-twitter.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialSnapchat from "@/assets/social-snapchat.svg";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: socialFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: socialInstagram },
  { label: "X", href: "https://x.com", icon: socialX },
  { label: "Twitter", href: "https://twitter.com", icon: socialTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: socialLinkedin },
  { label: "Snapchat", href: "https://snapchat.com", icon: socialSnapchat },
];

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        /*
          backgroundColor: #1a3a6e  →  transparent pixels in the wave PNG show
          dark blue, so the entire footer is dark blue from the very top.
          (Previously 'white' hid the wave curve by making transparent pixels
          merge visually with the white pricing section above.)

          backgroundImage: the wave PNG scaled to full CSS width (100% auto).
          At 1440 px viewport: PNG renders at 1440 × 569 px, exactly the
          Figma footer height of 569 px.
        */
        backgroundImage: `url(${footerBg})`,
        /*
          backgroundSize "auto 100%": image height = 100% of footer, width scales
          proportionally (ratio preserved). Overflow is clipped by overflow:hidden —
          no horizontal scrollbar. At narrow viewports the image is wider than the
          viewport but fully covers the footer height.
        */
        backgroundSize: "auto 100%",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*
        Dark-blue fill for narrower viewports where the wave PNG is shorter
        than the footer content.
        Wave PNG display height = 39.54 vw  (854 ÷ 2160 × 100 vw).
        At ≥ 1440 px this div starts below the footer bottom — effectively
        invisible. At narrower widths it fills the gap below the PNG.
      */}

      {/* Decorative white ellipses — Figma: 524×524 circles at top-right / bottom-left.
          Footer already has overflow:hidden, so no wrapper div is needed.            */}

      {/*
        Content wrapper — z:3 (above bg, above ellipses).
        paddingTop uses vw-based value to keep alignment with the wave
        across different viewport widths:
          footer-bg.png height / width ≈ 634 / 1440 ≈ 44vw
          Logo sits at y:319 within the 634px bg = 319/634 ≈ 50% of bg height
          → 0.5 × 44vw = 22vw ≈ logo's top offset
      */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "max(22vw, 200px)",
        }}
      >
        {/* Logo + social icons row — Figma: logo x:200 left, icons x:980-1190 right */}
        <div
          className="max-w-[1040px] mx-auto flex items-center justify-between flex-wrap px-2 pt-20 md:px-0 md:pt-0"
          style={{
            gap: "24px",
            paddingBottom: "clamp(60px, 5.4vw, 78px)",
          }}
        >
          {/* RemoteRecruit logo — w:184 h:74 from Figma export */}
          <a href="#" aria-label="RemoteRecruit home" className="shrink-0 hover:opacity-80 transition-opacity duration-200">
            <img loading="lazy" decoding="async"
              src={footerLogo}
              alt="RemoteRecruit"
              draggable={false}
              className="block object-contain w-[130px] h-auto md:w-[184px] md:h-[74px]"
            />
          </a>

          {/* Social icons — 6 × 32px circles, ~10px gap between them */}
          <nav aria-label="Social media links">
            <ul
              className="flex items-center list-none m-0 p-0"
              style={{ gap: "10px" }}
            >
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block transition-all duration-200 hover:scale-110 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#52b4da] focus-visible:rounded-full"
                    style={{ display: "block", width: "32px", height: "32px" }}
                  >
                    <img loading="lazy" decoding="async"
                      src={icon}
                      alt={label}
                      width={32}
                      height={32}
                      style={{
                        display: "block",
                        width: "32px",
                        height: "32px",
                      }}
                      draggable={false}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider — Figma: 1px #8ba3cc */}
        <div
          style={{
            height: "1px",
            background: "#8BA3CC",
            mixBlendMode: "normal",
            opacity: "0.5",
            margin: "0",
          }}
          role="separator"
        />

        {/* RR Icon — Figma: centered, 40×32, paddingTop ~24px, paddingBottom ~28px */}
        <div
          className="flex items-center justify-center"
          style={{ paddingTop: "23px", paddingBottom: "19px" }}
        >
          <img loading="lazy" decoding="async"
            src={rrIcon}
            alt="RemoteRecruit icon"
            width={40}
            height={32}
            style={{
              display: "block",
              width: "40px",
              height: "32px",
              objectFit: "contain",
            }}
            draggable={false}
          />
        </div>
      </div>
    </footer>
  );
}
