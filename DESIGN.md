# Design System Strategy: The Noir Artisanal

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

This isn't just a promotional layout; it is a high-end editorial experience that mirrors the artisanal process of crafting a Black Sesame Cream Latte. We move away from the "template" look by embracing **Moody Minimalism**. The aesthetic is defined by large expansive voids (negative space), intentional asymmetry that mimics the swirl of mocha into milk, and a sophisticated interplay between the heavy dark charcoal and the ethereal off-whites. Our goal is to evoke the tactile sensation of a cold stone counter, heavy glassware, and velvet-smooth cream.

## 2. Colors
The palette is a study in tonal depth, moving from the obsidian depths of sesame to the warm, inviting tones of steamed milk and espresso accents.

*   **Primary Portfolio (`primary`, `on-primary`):** A sophisticated off-white/bone palette. These colors represent the milk base and are used for high-impact readability against dark backgrounds.
*   **The Depth Spectrum (`surface`, `surface-container-low` to `-highest`):** Our dark charcoal greys. Use `surface` (#0e0e0e) as the canvas to create a moody, "low-light cafe" atmosphere.
*   **The Mocha Accent (`secondary`):** Reserved for subtle call-outs, interactive states, or "New Menu" tags. It should feel like a concentrated drop of espresso—rare and intentional.

## 3. Typography
We use a high-contrast typographic pairing to balance heritage with modernity.

*   **The Heritage Serif (Noto Serif):** Used for `display` and `headline` levels. This font carries the weight of the "Black Sesame Cream Latte" title. Use `display-lg` for the main title, employing tighter tracking and intentional line-breaks to create an "editorial masthead" feel.
*   **The Modernist Sans (Manrope):** Used for `title`, `body`, and `label`. This clean, geometric face provides a clinical, high-end contrast to the serif. It represents the "New Menu" clarity and functional details.
*   **Visual Hierarchy:** Always lead with the serif for emotion and follow with the sans-serif for information. Avoid using both at the same scale; one must always dominate to maintain the "Curator" aesthetic.

## 4. Elevation & Depth
In a minimalist system, depth is the primary way we communicate hierarchy without clutter.

*   **The Layering Principle:** Treat the interface as a series of stacked premium papers. A card shouldn't "pop" with a shadow; it should be revealed by a shift in tone. For example, place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, recessed effect.
*   **Ambient Shadows:** If an element must float (like a floating action button), use an extra-diffused shadow.
    *   *Spec:* Blur: 40px, Opacity: 6% of `on-surface`. This mimics natural light hitting a matte surface.

## 5. Components
Each component must feel bespoke and intentional, never "out of the box."

*   **Buttons:**
    *   *Primary:* `primary` background with `on-primary` text. No rounded corners—use `sm` (0.125rem) or `none` for a brutalist, high-end feel.
    *   *Secondary:* `surface` background with a `secondary` "Ghost Border."
*   **Chips (e.g., "Dairy-Free", "Iced"):** Use `surface-container-high` backgrounds with `label-md` Manrope text. No borders.

## 6. Do's and Don'ts

**Do:**
*   Use `spacing-20` and `spacing-24` for hero margins to create a sense of luxury and "breathing room."
*   Apply `secondary-dim` (#be957a) for small, meaningful details like an asterisk or a bullet point to draw the eye without overwhelming the palette.

**Don't:**
*   **Don't** use 100% opaque black (#000000) for backgrounds; use the specified `surface` (#0e0e0e) to maintain the "charcoal" warmth.
