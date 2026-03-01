

# Two-Column Grid Layout for Experience and Education

## What Changes

Both the Experience and Education sections will switch from a single-column vertical list to a **2-column grid on desktop** (2 cards left, 2 cards right). On mobile, cards will remain stacked in a single column.

## Experience Section (`src/components/ExperienceSection.tsx`)

- **Remove** the vertical timeline layout (the timeline line, left padding, icon circles)
- **Replace** with a `grid md:grid-cols-2 gap-5` container
- Each card keeps its current content (role, company, period, description) with the Briefcase icon
- Remove the absolute timeline line element
- Update the container from `max-w-3xl` to `max-w-4xl` to give the 2-column layout more room
- Update GSAP animation selector from `.timeline-item` to match the new card class
- Cards 1 and 3 will be in the left column, cards 2 and 4 in the right column (natural grid flow)

## Education Section (`src/components/EducationSection.tsx`)

- **Replace** the `space-y-5` single-column list with a `grid md:grid-cols-2 gap-5` container
- Each card keeps its current content (degree, institution, detail) with the GraduationCap icon
- Update container from `max-w-3xl` to `max-w-4xl`
- GSAP animation stays the same, targeting `.edu-card`
- Cards 1 and 3 left, cards 2 and 4 right (natural grid flow)

## Mobile
- No changes -- `md:grid-cols-2` means single column on small screens by default

