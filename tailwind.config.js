/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // fontSize: {
      //   "--step-0": "clamp(1rem, 0.9095rem + 0.3604vw, 1.25rem)",
      //   "--step-1": "clamp(1.2rem, 1.0914rem + 0.4324vw, 1.5rem)",
      //   "--step-2": "clamp(1.44rem, 1.3096rem + 0.5189vw, 1.8rem)",
      //   "--step-3": "clamp(1.728rem, 1.5715rem + 0.6227vw, 2.16rem)",
      //   "--step-4": "clamp(2.0736rem, 1.8859rem + 0.7472vw, 2.592rem)",
      //   "--step-5": "clamp(2.4883rem, 2.263rem + 0.8967vw, 3.1104rem)",
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-1": "#3A140B",
        "main-2": "#FFF8DB",
        primary: "#DBD976",
        secondary: "#77B09F",
        tertiary: "#D76F2D",
        "accent-1": "#F0047F",
        "accent-2": "#A20F81",
        "feedback-error": "#A11B04",
        "feedback-succeed": "#99B836",
        "feedback-disabled-1": "#646464",
        "feedback-disabled-2": "hsla(0 0% 39.2% / 0.2)",
      },
      textColor: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-1": "#3A140B",
        "main-2": "#FFF8DB",
        primary: "#DBD976",
        secondary: "#77B09F",
        tertiary: "#D76F2D",
        "accent-1": "#F0047F",
        "accent-2": "#A20F81",
        "feedback-error": "#A11B04",
        "feedback-succeed": "#99B836",
        "feedback-disabled-1": "#646464",
        "feedback-disabled-2": "hsla(0 0% 39.2% / 0.2)",
      },
      borderRadius: {
        "rounded-reg": "6px",
      },
      border: {
        "border-thin": "2px",
        "border-thick": "3px",
      },
      margin: {
        desktop: "8rem",
        mobile: "2rem",
      },
      boxShadow: {
        custom: "9px 9px 0px #3A140B",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".input": {
          color: theme("textColor.main-1"),
          fontSize: "7rem",
        },
        ".input2": {
          color: "green",
          fontSize: "5rem",
        },
      });
    },
  ],
};
