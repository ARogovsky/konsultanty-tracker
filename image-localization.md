# Image Localization

All external images have been localized and are now served from the local file system.

## Changes Made

1. Created a directory structure for images at `public/assets/images/`
2. Downloaded the following images:
   - `mipt-logo.png` (used in Header and Footer)
   - `hero-image.png` (used in Hero section)
   - `diploma.png` (used in OutcomesSection)
   - `team-member-1.png` (Alexander Ivanov)
   - `team-member-2.png` (Ekaterina Smirnova)
   - `team-member-3.png` (Michael Petrov)

3. Updated references in the following files:
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `src/components/Hero.tsx`
   - `src/components/OutcomesSection.tsx`
   - `src/components/TeamSection.tsx`

## Original URLs

The original image URLs were:
- `https://ext.same-assets.com/3940261090/2372737419.png` - MIPT Logo (Header & Footer)
- `https://ext.same-assets.com/3940261090/1168072916.png` - Hero Image
- `https://ext.same-assets.com/3940261090/1797803123.png` - Diploma Image
- `https://ext.same-assets.com/3940261090/3005813921.png` - Team Member 1
- `https://ext.same-assets.com/3940261090/4269177447.png` - Team Member 2
- `https://ext.same-assets.com/3940261090/709991565.png` - Team Member 3

## New Paths

The new paths are:
- `/assets/images/mipt-logo.png`
- `/assets/images/hero-image.png`
- `/assets/images/diploma.png`
- `/assets/images/team-member-1.png`
- `/assets/images/team-member-2.png`
- `/assets/images/team-member-3.png` 