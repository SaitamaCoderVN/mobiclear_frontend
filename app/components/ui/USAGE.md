# UI Components Usage Guide

## Quick Start

Import components from the barrel export:

```tsx
import { 
  Button, 
  Card, 
  Chip, 
  MaterialIcon, 
  SectionHeading, 
  AnimatedSection 
} from '@/app/components/ui';
```

## Button Component

### Primary Variant (CTA)
```tsx
<Button variant="primary" size="md" icon="arrow_forward">
  Get Started
</Button>
```

### Secondary Variant (Default)
```tsx
<Button variant="secondary" onClick={handleClick}>
  Learn More
</Button>
```

### Link Button
```tsx
<Button variant="tertiary" href="/features">
  View Features
</Button>
```

### Sizes
- `sm`: Small padding, smaller text
- `md`: Medium padding (default)
- `lg`: Large padding, larger text

## Card Component

### Default Surface Card
```tsx
<Card variant="default" padding="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Elevated Card with Hover
```tsx
<Card variant="elevated" hover>
  <h3>Feature Card</h3>
  <p>Scales on hover</p>
</Card>
```

### Glass Effect
```tsx
<Card variant="glass" padding="p-8">
  Content with glassmorphic background
</Card>
```

### Dark Glass
```tsx
<Card variant="glass-dark" padding="p-6">
  Dark glassmorphism with subtle border
</Card>
```

## Chip Component

### AI/Feature Chip
```tsx
<Chip variant="ai" icon="smart_toy">
  AI-Powered
</Chip>
```

### Status Chip
```tsx
<Chip variant="status">
  Active
</Chip>
```

### Tech Chip (Monospace)
```tsx
<Chip variant="tech">
  API v2.1
</Chip>
```

## MaterialIcon Component

### Basic Icon
```tsx
<MaterialIcon name="water_drop" />
```

### Filled Icon
```tsx
<MaterialIcon name="check_circle" filled />
```

### Different Sizes
```tsx
<MaterialIcon name="settings" size="xl" />
<MaterialIcon name="menu" size="lg" />
<MaterialIcon name="close" size="md" />
<MaterialIcon name="add" size="sm" />
```

### With Custom Styling
```tsx
<MaterialIcon name="favorite" className="text-error" filled />
```

## SectionHeading Component

### Basic Section
```tsx
<SectionHeading
  title="Why Choose MobiClear?"
  subtitle="Experience the future of car wash automation"
/>
```

### With Tag
```tsx
<SectionHeading
  title="Our Features"
  subtitle="Everything you need to know"
  tag="Features"
  align="center"
/>
```

### Left-Aligned
```tsx
<SectionHeading
  title="Get Started"
  subtitle="Follow these simple steps"
  align="left"
/>
```

## AnimatedSection Component

### Basic Animation (Fade Up)
```tsx
<AnimatedSection>
  <div>This content fades and slides up on scroll</div>
</AnimatedSection>
```

### Different Directions
```tsx
{/* Slides from left */}
<AnimatedSection direction="left">
  Content
</AnimatedSection>

{/* Slides from right */}
<AnimatedSection direction="right">
  Content
</AnimatedSection>

{/* Fade only (no translation) */}
<AnimatedSection direction="fade">
  Content
</AnimatedSection>
```

### With Stagger Effect
```tsx
<AnimatedSection delay={0.1}>
  First item
</AnimatedSection>
<AnimatedSection delay={0.2}>
  Second item
</AnimatedSection>
<AnimatedSection delay={0.3}>
  Third item
</AnimatedSection>
```

### Custom Duration
```tsx
<AnimatedSection duration={1.2}>
  Content with longer animation
</AnimatedSection>
```

### Animate Every Time
```tsx
<AnimatedSection once={false}>
  Animates every time it enters viewport
</AnimatedSection>
```

## Common Patterns

### Hero Section with CTA
```tsx
<div className="min-h-screen flex flex-col items-center justify-center">
  <SectionHeading
    title="Welcome to MobiClear"
    subtitle="AI-powered car wash booking"
    align="center"
  />
  <Button variant="primary" size="lg" icon="arrow_forward">
    Get Started Free
  </Button>
</div>
```

### Feature Grid
```tsx
<div className="grid grid-cols-3 gap-6">
  {features.map((feature, i) => (
    <AnimatedSection key={feature.id} delay={i * 0.1}>
      <Card variant="elevated" hover>
        <MaterialIcon name={feature.icon} size="lg" />
        <h3 className="text-xl font-bold">{feature.title}</h3>
        <p className="text-secondary">{feature.description}</p>
      </Card>
    </AnimatedSection>
  ))}
</div>
```

### Testimonial Card
```tsx
<Card variant="glass" padding="p-8">
  <div className="flex gap-2 mb-4">
    {[1,2,3,4,5].map(() => (
      <MaterialIcon key={i} name="star" filled size="sm" />
    ))}
  </div>
  <p className="text-lg mb-4">"Great service!"</p>
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-primary" />
    <div>
      <p className="font-bold">John Doe</p>
      <p className="text-sm text-secondary">Happy Customer</p>
    </div>
  </div>
</Card>
```

## Design System Reference

### Color Tokens (CSS Custom Properties)
- `--primary`: #0051c9
- `--primary-container`: #316be4
- `--tertiary`: #00655c
- `--tertiary-container`: #008075
- `--on-surface`: #191c1e
- `--on-surface-variant`: #424656
- `--surface-container-*`: Various levels

### Typography
- Headlines: Use `font-headline` class
- Body: Use default or `font-body` class

### Utilities
- `.signature-gradient`: Primary gradient
- `.ambient-shadow`: Branded shadow
- `.glass`: Light glassmorphism
- `.glass-dark`: Dark glassmorphism

## Accessibility Notes

- All buttons have focus rings and keyboard support
- Icons use semantic Material Symbols
- Color contrast meets WCAG AA standards
- AnimatedSection respects `prefers-reduced-motion` (built into framer-motion)
