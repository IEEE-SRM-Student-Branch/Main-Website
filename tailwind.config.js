/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Manrope', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                "primarybg": "#030214",
            },
            animation : {
                "infiniteScroll": "scroll 30s linear infinite",
                "infiniteScrollReverse": "scrollReverse 30s linear infinite",
            },
            keyframes : {
                scroll : {
                    "0%" : { transform : "translateY(0)" },
                    "100%" : { transform : "translateY(calc(-360px * var(--leftLength)))" },
                },
                scrollReverse : {
                    "100%" : { transform : "translateY(0)" },
                    "0%" : { transform : "translateY(calc(-360px * var(--rightLength)))" },
                }
            },
        },
    },
    plugins: [],
}
