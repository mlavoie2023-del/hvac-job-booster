import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'accent': 'var(--shadow-accent)',
        'primary': 'var(--shadow-primary)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "typing-dot": {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-4px)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "message-in": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "notification-float": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "10%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "80%": { opacity: "1", transform: "translateY(-5px) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-15px) scale(0.95)" },
        },
        // Feature mockup animations
        "node-pulse": {
          "0%, 100%": { opacity: "0.4", boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" },
          "50%": { opacity: "1", boxShadow: "0 0 12px 4px hsl(var(--primary) / 0.4)" },
        },
        "line-flow": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "check-bounce": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(28px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(28px) rotate(-360deg)" },
        },
        "slide-stage": {
          "0%, 15%": { left: "0%" },
          "35%, 50%": { left: "50%" },
          "70%, 85%": { left: "100%" },
          "100%": { left: "0%" },
        },
        "message-slide-in": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "cursor-move": {
          "0%, 20%": { transform: "translate(0, 0)" },
          "40%, 50%": { transform: "translate(20px, 8px)" },
          "55%": { transform: "translate(20px, 8px) scale(0.9)" },
          "60%, 100%": { transform: "translate(20px, 8px) scale(1)" },
        },
        "button-click": {
          "0%, 50%": { transform: "scale(1)" },
          "55%": { transform: "scale(0.95)" },
          "60%, 100%": { transform: "scale(1)" },
        },
        "date-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 8px 2px hsl(var(--primary) / 0.6)" },
        },
        "post-send": {
          "0%, 70%": { opacity: "1", transform: "translateX(0)" },
          "90%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "stagger-fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "typing-dot": "typing-dot 1.4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "message-in": "message-in 0.4s ease-out forwards",
        "notification-float": "notification-float 6s ease-in-out infinite",
        // Feature mockup animations
        "node-pulse": "node-pulse 2s ease-in-out infinite",
        "line-flow": "line-flow 2s linear infinite",
        "check-bounce": "check-bounce 0.4s ease-out forwards",
        "bar-grow": "bar-grow 1s ease-out forwards",
        "orbit": "orbit 12s linear infinite",
        "slide-stage": "slide-stage 4s ease-in-out infinite",
        "message-slide-in": "message-slide-in 0.5s ease-out forwards",
        "cursor-move": "cursor-move 3s ease-in-out infinite",
        "button-click": "button-click 3s ease-in-out infinite",
        "date-pulse": "date-pulse 2s ease-in-out infinite",
        "post-send": "post-send 3s ease-in-out infinite",
        "stagger-fade-in": "stagger-fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
