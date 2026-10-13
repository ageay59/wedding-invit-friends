---
name: Domaine Romance
colors:
  surface: '#fff8f3'
  surface-dim: '#fdd494'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2e2'
  surface-container: '#ffebd0'
  surface-container-high: '#ffe4be'
  surface-container-highest: '#ffdeab'
  on-surface: '#271900'
  on-surface-variant: '#534433'
  inverse-surface: '#422c00'
  inverse-on-surface: '#ffeed9'
  outline: '#867461'
  outline-variant: '#d9c3ad'
  surface-tint: '#865300'
  primary: '#865300'
  on-primary: '#ffffff'
  primary-container: '#fea200'
  on-primary-container: '#663f00'
  inverse-primary: '#ffb960'
  secondary: '#7e5700'
  on-secondary: '#ffffff'
  secondary-container: '#fdb726'
  on-secondary-container: '#6c4a00'
  tertiary: '#686000'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8b923'
  on-tertiary-container: '#4f4900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb960'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffdeab'
  secondary-fixed-dim: '#ffba33'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#f5e550'
  tertiary-fixed-dim: '#d8c934'
  on-tertiary-fixed: '#1f1c00'
  on-tertiary-fixed-variant: '#4e4800'
  background: '#fff8f3'
  on-background: '#271900'
  surface-variant: '#ffdeab'
typography:
  display-hero:
    fontFamily: Philosopher
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Philosopher
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Philosopher
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Philosopher
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Philosopher
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 38px
  headline-sm:
    fontFamily: Philosopher
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-md:
    fontFamily: Philosopher
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Philosopher
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Philosopher
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Philosopher
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-uppercase:
    fontFamily: Philosopher
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-md:
    fontFamily: Philosopher
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system celebrates the union of Shauna & Antoine set against the timeless French countryside at Domaine de Coulonge. Built upon a balance of old-world château heritage and intimate romance, the aesthetic is airy, luminous, and emotionally welcoming. Rather than rigid royal formality, it embraces an approachable luxury that invites family and international guests into their story.

The visual style merges **Glassmorphism** with soft **Minimalism**. Translucent ivory and frosted glass containers float delicately over emotive editorial photography, allowing natural stone, warm greenery, and evening candlelight to shine through without compromising legibility. Delicate hairline borders, vibrant gold-tinted accents, and generous optical breathing room convey warmth, poetry, and effortless French sophistication.

## Colors

The color palette captures vibrant champagne, raw limestone, and sunlit antique gold:

- **Primary (`#FEA200`)**: A vibrant gold used for focal highlights, monogram accents, active states, and decorative dividers.
- **Secondary (`#E4A101`)**: Rich warm sand, providing intermediate contrast on badges, subtle card fills, and secondary buttons.
- **Tertiary (`#B3A501`)**: Deep French roast espresso for grounding typography, providing rich warmth without the starkness of pure black.
- **Neutral (`#92723B`)**: Warm alabaster ivory, establishing an organic canvas that replaces clinical whites.

Semi-transparent surface tokens (`glass-surface` and `glass-surface-subtle`) paired with hairline highlights (`glass-border`) ensure high legibility over rich photo backdrops while maintaining an ethereal, floating quality.

## Typography

The typography features the expressive, elegant styling of `Philosopher` across all headings, body text, and labels for a unified, romantic editorial voice.

- **Headlines & Titles**: Display styles set an editorial, romantic tone reminiscent of high-end wedding invitations. Large titles favor relaxed letter-spacing and italic flourishes for French phrases or couples' names.
- **Bilingual Nuance**: Secondary translations (e.g., French subtitles under English headers) should be styled in `label-uppercase` or italicized `body-sm` in a reduced opacity to keep clear visual hierarchy.
- **Body & Functional Details**: Schedule timetables, travel directions, and RSVP forms rely entirely on `Philosopher` for effortless scanning on mobile devices outdoors.

## Layout & Spacing

The layout embraces calm, generous proportions inspired by luxury editorial print layouts.

- **Grid Structure**: A responsive 12-column grid on desktop collapses into a 4-column fluid layout on mobile screens. Maximum content width is capped at 1140px to ensure card components and narrative text blocks do not over-stretch.
- **Vertical Rhythm**: Generous vertical spacing (`space-xl` and higher) creates a leisurely, celebratory pacing between sections (e.g., Timeline, Castle Location, RSVP, and Accommodations).
- **Mobile Adaptations**: Mobile layouts shift full-bleed background photography to the base tier while interactive panels hug safe canvas margins (`1.25rem`), maximizing touch targets and readability on handheld screens.

## Elevation & Depth

Visual depth is achieved through translucent glassmorphism and subtle atmospheric luminescence, rather than harsh drop shadows.

- **Surface Treatment**: Primary cards feature semi-transparent frosted surfaces with a backdrop blur of `16px` to `20px` (`backdrop-filter: blur(16px)`). This lets background colors filter through softly while retaining crisp text contrast.
- **Borders & Rim Lighting**: Glass cards are framed with an ultra-thin 1px border to catch light subtly around card edges.
- **Ambient Shadows**: For floating interactive elements (modals, active dropdowns, sticky action bars), use a warm ambient drop shadow: `0 12px 32px -4px rgba(179, 165, 1, 0.08)`. This creates an airy, weightless float that harmonizes with architectural stone and natural light.

## Shapes

The design system incorporates soft architectural curves (`roundedness: 2`, 0.5rem base radius) alongside graceful arch motifs inspired by Domaine de Coulonge's brick and stone vaulted doorways.

- **Cards & Overlays**: Styled with `rounded-lg` (1rem / 16px) to soften photographic framing.
- **Pills & Badges**: Small decorative chips, time badges, and bilingual switchers use full pill shapes (`rounded-full`) for a friendly, touchable look.
- **Arched Image Framing**: Select feature photography (e.g., couple portraits, ceremony gates) can utilize top-curved arched masking (`border-radius: 9999px 9999px 0 0`) to mirror the venue's classic estate architecture.

## Components

### Buttons
- **Primary Action (RSVP / Confirm)**: Solid vibrant gold background (`#FEA200`) with pure text, uppercase label typography, letter spacing `0.1em`, and subtle inner rim lighting. Hover introduces a gentle warm glow (`0 6px 20px rgba(254, 162, 0, 0.3)`).
- **Secondary / Ghost (Directions / Details)**: Frosted glass background with hairline border, espresso text, and soft hover transition to ivory fill.

### Cards & Overlays
- **Timeline & Event Cards**: Frosted translucent surface with delicate vertical gold connector lines. Time markers rest inside circular champagne tokens.
- **Accommodation Cards**: Glassmorphic panels with subtle gold border accents and discreet external vendor link tags (Airbnb, Booking.com, Château partner hotels).

### Input Fields & RSVP Forms
- Clean, minimal input frames with a faint ivory background fill, 1px warm sand border, and smooth focus transitions that shift borders to vibrant gold with an outer focus ring. Floating labels maintain legibility.

### Checkboxes & Radio Selectors
- Custom rounded controls in vibrant bronze. When checked, they reveal a delicate checkmark or centered dot, paired with smooth micro-scale animations.

### Chips & Timeline Tags
- Compact pill-shaped tokens with subtle ivory frosting and uppercase tracking, used to denote dress codes ("Cocktail Attire"), dietary tags ("Vegetarian"), and event times.

### Monogram & Decorative Accents
- Minimalist circular line-art monograms ("S & A") with thin metallic strokes float at header sections and act as soft watermark divider motifs between page chapters.