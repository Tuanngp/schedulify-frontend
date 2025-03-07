import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand colors - Đã điều chỉnh để dịu và hài hòa hơn
        primary: {
          DEFAULT: "#2563EB", // Điều chỉnh tone xanh dương dịu hơn
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB", // Màu chính
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#172554",
        },
        secondary: {
          DEFAULT: "#0F766E", // Xanh lục đậm hơn để tăng contrast
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0F766E",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        accent: {
          DEFAULT: "#6D28D9", // Tím đậm hơn để tăng contrast
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#6D28D9",
          700: "#5B21B6",
          800: "#4C1D95",
          900: "#4C1D95",
        },
        // Semantic colors với contrast ratio tốt hơn
        success: {
          DEFAULT: "#059669",
          50: "#ECFDF5",
          100: "#D1FAE5",
          background: "#ECFDF5",
          text: "#065F46", // Thêm màu text tương phản
        },
        warning: {
          DEFAULT: "#D97706",
          50: "#FFFBEB",
          100: "#FEF3C7",
          background: "#FFFBEB",
          text: "#92400E", // Thêm màu text tương phản
        },
        error: {
          DEFAULT: "#DC2626",
          50: "#FEF2F2",
          100: "#FEE2E2",
          background: "#FEF2F2",
          text: "#991B1B", // Thêm màu text tương phản
        },
        info: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          background: "#EFF6FF",
          text: "#1E40AF", // Thêm màu text tương phản
        },
        // Neutral colors với contrast tốt hơn
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        // Text colors với contrast ratio đảm bảo
        text: {
          primary: "#111827", // Text chính
          secondary: "#4B5563", // Text phụ
          disabled: "#9CA3AF", // Text disabled
          inverse: "#FFFFFF", // Text trên nền tối
        },
        // Background colors
        background: {
          primary: "#FFFFFF",
          secondary: "#F9FAFB",
          tertiary: "#F3F4F6",
        },
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Headings
        "display-2xl": ["4.5rem", { lineHeight: "5.625rem", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "2.375rem" }],
        "display-xs": ["1.5rem", { lineHeight: "2rem" }],
        // Body
        "text-xl": ["1.25rem", { lineHeight: "1.875rem" }],
        "text-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "text-md": ["1rem", { lineHeight: "1.5rem" }],
        "text-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "text-xs": ["0.75rem", { lineHeight: "1.125rem" }],
      },
      spacing: {
        // Layout spacing
        container: "2rem",
        "container-lg": "4rem",
        section: "5rem",
        // Component spacing
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 