const plugin = require("tailwindcss/plugin");

module.export = {
  plugins: [
    plugin(function ({ addUtilities }) {
      const directions = [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
      ];

      const newUtilities = {
        ".gradient-mask-bottom": {
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-top": {
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-left": {
          maskImage:
            "linear-gradient(to left, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-right": {
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-bottom-left": {
          maskImage:
            "linear-gradient(to bottom left, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-bottom-right": {
          maskImage:
            "linear-gradient(to bottom right, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-top-left": {
          maskImage:
            "linear-gradient(to top left, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
        ".gradient-mask-top-right": {
          maskImage:
            "linear-gradient(to top right, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
