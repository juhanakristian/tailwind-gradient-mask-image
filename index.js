const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const directions = {
    t: "to top",
    tr: "to top right",
    r: "to right",
    br: "to bottom right",
    b: "to bottom",
    bl: "to bottom left",
    l: "to left",
    tl: "to top left",
  };

  const steps = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"];

  const utilities = Object.entries(directions).reduce(
    (result, [shorthand, direction]) => {
      const variants = steps.map((step) => {
        const className = `.gradient-mask-${shorthand}-${step}`;
        return {
          [className]: {
            maskImage: `linear-gradient(${direction}, rgba(0, 0, 0, 1.0) ${step}%, transparent 100%)`,
          },
        };
      });

      const stepClasses = Object.assign(...variants);
      return {
        ...result,
        ...stepClasses,
      };
    },
    {}
  );

  addUtilities(utilities);
});
