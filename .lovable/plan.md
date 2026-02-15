
# Mobile Bottom Navbar with Glass Effect

## What Changes

### Mobile (below md breakpoint)
- **Remove** the current hamburger menu, slide-in drawer, and overlay entirely
- **Replace** with a **fixed bottom navigation bar** inspired by the reference image:
  - Rounded pill shape, centered at the bottom of the screen
  - **Glass/frosted effect**: semi-transparent dark background with `backdrop-blur-xl` and a subtle border
  - **5 icon buttons** in a row: Home, About (user icon), Experience (briefcase), Education (graduation cap), Contact Me (message icon highlighted in accent blue)
  - The Contact Me icon gets a circular accent-colored background to stand out (matching the reference)
  - Icons use `lucide-react` (Home, User, Briefcase, GraduationCap, MessageCircle)
- **Remove** the hamburger button from the top navbar on mobile

### Desktop (md and above)
- **Add glass effect** to the top navbar: `bg-white/10 backdrop-blur-xl border-b border-white/10` style when scrolled, keeping transparent when at top
- Keep the existing layout (logo, links, Contact Me button) unchanged

## Technical Details

### File: `src/components/Navbar.tsx`
- Import additional icons: `Home, User, Briefcase, GraduationCap, MessageCircle` from lucide-react
- Remove `Menu, X` imports (no longer needed)
- Remove `mobileOpen` state and the slide-in drawer markup
- Desktop nav: update scrolled class to use glass effect (`bg-primary/70 backdrop-blur-xl border-b border-white/10`)
- Add a new mobile bottom bar: `fixed bottom-4 left-4 right-4 z-50 md:hidden` with rounded-full, glass background, flex row of icon links
- Each icon links to its section (`#`, `#about`, `#experience`, `#education`, `#contact`)
- Contact Me icon wrapped in a circular accent background

### File: `src/index.css`
- No changes needed (glass effect handled via Tailwind utilities)

### File: `src/pages/Index.tsx`
- May need to add bottom padding on mobile to prevent content being hidden behind the bottom navbar
