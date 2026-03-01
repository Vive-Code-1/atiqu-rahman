
# Desktop Navbar and Hero Section Redesign

## Navbar Changes (Desktop Only)

### Center the nav links
- Change the desktop navbar layout from `justify-between` (logo left, links+button right) to a three-column layout:
  - **Left**: Logo ("Atiqur.")
  - **Center**: Navigation links (About, Experience, Education, Skills)
  - **Right**: "Contact Me" button
- Use `flex items-center` with the logo taking left space, nav links centered absolutely or via flex-1 justify-center, and Contact Me on the right

## Hero Section Changes (Desktop Only)

### Reverse layout: Text left, Image right
- On desktop (`md:flex-row`), change the order so text comes first (left) and image comes second (right)
- Currently: image first, text second. Swap using `md:flex-row-reverse` on the container, or reorder the elements with responsive ordering

### Premium visual upgrades
- Make the image larger on desktop (e.g., `md:h-80 md:w-80 lg:h-96 lg:w-96`)
- Add a subtle gradient overlay or decorative accent shape behind the image
- Add a subtle accent-colored vertical line or decorative element near the text
- Increase heading size on large screens (`lg:text-7xl`)
- Add a subtle animated underline or accent bar beneath the name
- Improve spacing and typography hierarchy

### Mobile stays unchanged
- All changes scoped to `md:` and `lg:` breakpoints only

## Technical Details

### File: `src/components/Navbar.tsx`
- Change line 37 container div from `justify-between` to a layout with three sections
- Logo gets `flex-shrink-0`
- Nav links wrapper gets `absolute left-1/2 -translate-x-1/2` or `flex-1 justify-center` to center them
- Contact Me button stays on the right with `ml-auto`

### File: `src/components/HeroSection.tsx`
- Swap the order of the photo and text blocks within the flex container for desktop
- Use `md:flex-row-reverse` is not right since text should be left -- instead reorder the JSX: put text div first, image div second, and keep `md:flex-row`
- Actually current order is image then text with `md:flex-row`. To get text-left, image-right: either reorder JSX or use `md:order-` classes
- Increase image size on desktop
- Add decorative elements behind image (gradient blob, accent ring)
- Bump heading to `lg:text-7xl` for more impact
- Add a small accent bar/line under the name for premium feel
