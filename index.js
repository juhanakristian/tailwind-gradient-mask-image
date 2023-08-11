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

  const steps = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "50-d", "60-d", "70-d", "80-d", "90-d"];

  const utilities = Object.entries(directions).reduce(
    (result, [shorthand, direction]) => {
      const variants = steps.map((step) => {
        const className = `.gradient-mask-${shorthand}-${step}`;
        if (step.includes("-")) {
          const substep = Number(step.split("-")[0]);
          return {
            [className]: {
              maskImage: `linear-gradient(${direction}, transparent, rgba(0, 0, 0, 1.0) ${100 - substep}%, rgba(0, 0, 0, 1.0) ${substep}%, transparent 100%)`,
            },
          };
        };
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
