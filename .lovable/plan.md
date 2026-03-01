

# Hide Top Navbar on Mobile

## What Changes
On mobile screens, the top navbar showing "Atiqur." will be completely hidden. Only the bottom navigation bar will remain visible on mobile. The desktop top navbar stays unchanged.

## Technical Details

### File: `src/components/Navbar.tsx`
- Add `hidden md:block` (or `md:flex`) classes to the top `<nav>` element so it only appears on desktop
- The bottom mobile navbar already has `md:hidden` so it will continue showing only on mobile
- This is a one-line class change

