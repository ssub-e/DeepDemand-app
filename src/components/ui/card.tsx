/**
 * @file src/components/ui/card.tsx
 * @description Standardized Card component suite for building content containers with consistent spacing, typography, and visual hierarchy.
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card to support different thematic contexts.
   * @default "default"
   */
  variant?: "default" | "primary" | "accent" | "glass" | "outline"
}

/**
 * Root Card component.
 * Provides the base container with shadow, border, and background styles.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground shadow-sm border-border/50",
      primary: "bg-primary text-primary-foreground shadow-md border-primary/10 ring-1 ring-primary/20",
      accent: "bg-accent/50 text-accent-foreground shadow-sm border-accent",
      glass: "card-glass shadow-lg",
      outline: "bg-transparent border-2 border-muted/30 hover:border-muted/50 transition-colors",
    }

    return (
      <div
        ref={ref}
        className={cn("rounded-xl border transition-all duration-200", variants[variant], className)}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

/**
 * CardHeader component.
 * Used for titles, descriptions, and metadata at the top of a card.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-2 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

/**
 * CardTitle component.
 * Displays a bold, prominent title for the card content.
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-xl font-bold leading-none tracking-tight text-foreground/90", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

/**
 * CardDescription component.
 * Provides supplementary information or context for the card.
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground/80 leading-relaxed", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

/**
 * CardContent component.
 * Main area for the card's body content.
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * CardFooter component.
 * Used for actions, links, or supplementary metadata at the bottom of a card.
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0 border-t border-transparent mt-auto", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
