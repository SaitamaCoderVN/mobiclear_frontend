```markdown
# Design System Philosophy: The Hydro-Digital Atelier

## 1. Overview & Creative North Star
This design system is built upon the North Star of **"The Hydro-Digital Atelier."** We are not just building a car wash management tool; we are creating a high-precision digital environment that mirrors the clarity of water and the intelligence of AI. 

To move beyond the "generic SaaS" look, this system rejects the rigid, boxed-in layouts of the past decade. Instead, we utilize **Editorial Asymmetry** and **Tonal Depth**. By leveraging expansive whitespace (white space is a functional element, not a void) and overlapping layered surfaces, we create a sense of architectural breathing room. This system feels professional and reliable because it is calm; it feels high-tech because it is frictionless.

---

## 2. Color & Surface Theory
The palette is rooted in high-contrast clarity. The primary blue (`#0051c9`) acts as a beacon of reliability against a landscape of sophisticated neutrals.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate content. **In this system, explicit 1px solid borders are prohibited for sectioning.** Boundaries must be defined through:
*   **Background Shifts:** Distinguish a sidebar from a main stage by moving from `surface` (#f7f9fb) to `surface-container-low` (#f2f4f6).
*   **Tonal Transitions:** Use subtle shifts in the `surface-container` tiers to denote hierarchy.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of stacked, frosted materials. 
*   **The Stage:** Use `surface` as the global background.
*   **The Canvas:** Use `surface-container-low` for large content areas.
*   **The Focus:** Place `surface-container-lowest` (#ffffff) cards on top of the Canvas to create a natural, "lifted" appearance without heavy shadows.

### The "Glass & Gradient" Rule
To evoke a high-tech "clean" feel, floating elements (modals, navigation bars, tooltips) should utilize **Glassmorphism**. Apply `surface_container_lowest` with a 70-80% opacity and a `backdrop-filter: blur(20px)`. 
*   **Signature Textures:** For primary CTAs and AI-driven insights, use a subtle linear gradient from `primary` (#0051c9) to `primary_container` (#316be4) at a 135-degree angle. This adds "soul" and depth to the digital interface.

---

## 3. Typography: Editorial Authority
We pair the geometric precision of **Manrope** for high-level branding and displays with the utilitarian clarity of **Inter** for data-heavy management tasks.

*   **Display & Headlines (Manrope):** These are your "Editorial" voices. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments. This conveys the "AI" authority of the platform.
*   **Title & Body (Inter):** These are the "Workhorse" voices. `body-md` (0.875rem) is the standard for car wash logs and management data.
*   **Label (Inter):** Use `label-md` in `on_surface_variant` (#424656) for metadata. 

**Hierarchy Tip:** Contrast a `display-sm` headline in `on_surface` with a `body-md` description in `secondary`. The massive scale shift creates a premium, intentional look that feels designed, not just "inputted."

---

## 4. Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` element behind a `surface-container-lowest` element. The delta in luminance creates an organic sense of depth.
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use an "Ambient Shadow":
    *   `box-shadow: 0 12px 40px rgba(0, 81, 201, 0.06);` 
    *   Notice the slight tint of the `primary` color in the shadow. This mimics natural light reflecting off the brand colors.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c2c6d8) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Uses the "Signature Gradient" (Primary to Primary-Container). Roundedness: `md` (0.375rem). Text: `label-md` uppercase with 0.05em tracking.
*   **Secondary:** `surface-container-high` background with `on_surface` text. No border.
*   **Tertiary:** Transparent background, `primary` text. Use for low-emphasis actions like "Cancel" or "View All."

### Cards & Lists
*   **The Rule of Zero Lines:** Forbid the use of divider lines. 
*   **Separation:** Use `8px` or `16px` of vertical whitespace (Gap) combined with a background shift (e.g., a `surface-container-low` card sitting on a `surface` background).
*   **Interactive State:** On hover, a card should transition from `surface-container-low` to `surface-container-lowest` and gain an Ambient Shadow.

### AI Insight Chips
*   **Visuals:** Use `tertiary_container` (#008075) with `on_tertiary_container` (#ddfff9) text. 
*   **Shape:** Use `full` roundedness (pill shape) to differentiate "AI-generated" content from standard system status chips.

### Input Fields
*   **Style:** `surface-container-highest` background, no border. 
*   **Focus State:** A 2px solid "Ghost Border" using `primary` at 40% opacity and a subtle `surface_tint` outer glow.
*   **Labels:** Use `title-sm` (Inter) placed 8px above the input for a clean, professional stack.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace aggressively. If a section feels "crowded," double the padding.
*   **DO** use `surface-container` tiers to nest information (e.g., a white card inside a light gray section).
*   **DO** use Manrope for any text larger than 24px to maintain the "Editorial" feel.
*   **DO** ensure all "AI" features use the `tertiary` (teal/green) color scale to distinguish intelligence from standard operations.

### Don't
*   **DON'T** use 1px solid borders to separate list items or grid cells. Use spacing and tonal shifts.
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#191c1e) to maintain the soft, high-end feel.
*   **DON'T** use standard "drop shadows" (black with high opacity). Use Ambient Shadows with a hint of the brand blue.
*   **DON'T** use sharp corners. Stick strictly to the Roundedness Scale, primarily `md` for components and `xl` for large containers.

---

*Director's Note: Every pixel must feel like it was placed by a person, not a framework. If the layout feels too symmetrical and "safe," break the grid. Offset an image, or let a headline bleed into the margin. This is how we communicate the MobiClear premium experience.*```