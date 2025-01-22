import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "80%": { width: "100%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        progress: "progress 4s ease infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const gradients = {
        // 텍스트 그라데이션
        ".text-gradient-cyan": {
          "background-image": "linear-gradient(to right, #06b6d4, #3b82f6)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          color: "transparent",
          "background-clip": "text",
        },
        ".text-gradient-purple": {
          "background-image":
            "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          color: "transparent",
          "background-clip": "text",
        },
        ".text-gradient-rainbow": {
          "background-image":
            "linear-gradient(to right, #86efac, #3b82f6, #9333ea)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          color: "transparent",
          "background-clip": "text",
        },
        ".text-gradient-sunset": {
          "background-image":
            "linear-gradient(to right, #ec4899, #ef4444, #eab308)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          color: "transparent",
          "background-clip": "text",
        },

        // 배경 그라데이션
        ".bg-gradient-cyan": {
          "background-image": "linear-gradient(to right, #06b6d4, #3b82f6)",
        },
        ".bg-gradient-purple": {
          "background-image":
            "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
        },
        ".bg-gradient-rainbow": {
          "background-image":
            "linear-gradient(to right, #86efac, #3b82f6, #9333ea)",
        },
        ".bg-gradient-sunset": {
          "background-image":
            "linear-gradient(to right, #ec4899, #ef4444, #eab308)",
        },
      };

      addUtilities(gradients);
    }),
  ],
} satisfies Config;
