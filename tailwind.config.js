/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

// const [theme, setTheme] = useState<boolean>(false);
//     useEffect(() => {
//         setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"));
//     }, [])

//     const handleThemeChange: () => void = () => {
//         setTheme(!theme);
//         window.localStorage.setItem("theme", JSON.stringify(!theme));