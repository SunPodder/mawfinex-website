/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "neon-cyan": "#00fff5",
                "neon-green": "#39ff14",
                "dark-bg": "#000000",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            animation: {
                glitch: "glitch 2s infinite",
                typewriter: "typewriter 3s steps(30) 1s forwards",
                float: "float 3s ease-in-out infinite",
                "pulse-slow": "pulse 3s ease-in-out infinite",
                "grid-move": "grid-move 20s linear infinite",
            },
            keyframes: {
                glitch: {
                    "0%, 100%": { transform: "translate(0)" },
                    "10%": { transform: "translate(-2px, -2px)" },
                    "20%": { transform: "translate(2px, 2px)" },
                    "30%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(2px, -2px)" },
                },
                typewriter: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "grid-move": {
                    "0%": { transform: "translate(0, 0)" },
                    "100%": { transform: "translate(50px, 50px)" },
                },
            },
        },
    },
    plugins: [],
}
