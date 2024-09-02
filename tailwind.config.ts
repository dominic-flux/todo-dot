import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        "days-one": "Days One",
      },
    },
  },
  plugins: [],
} satisfies Config;
