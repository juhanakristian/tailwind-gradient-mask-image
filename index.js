const plugin = require("tailwindcss/plugin");
const splitAtTopLevelOnly = require('tailwindcss/util/splitAtTopLevelOnly')

module.exports = plugin(function ({ addUtilities, matchUtilities }) {
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

  const BASE_CLASS = ".gradient-mask-"
  const steps = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "50-d", "60-d", "70-d", "80-d", "90-d"];

  const utilities = Object.entries(directions).reduce(
    (result, [shorthand, direction]) => {
      const variants = steps.map((step) => {
        const className = `${BASE_CLASS}${shorthand}-${step}`;
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

const utilitiesToMatch = Object.entries(directions).reduce((result, [shorthand, direction]) => {
    const className = `${BASE_CLASS}${shorthand}`

    const matchUtility = {
        [className]: (value) => {
            Vjconsole.log(value)
            const steps = splitAtTopLevelOnly(steps, ',').map(step => step.trim().replaceAll('_', ' '))

            return {
                maskImage: `linear-gradient(${direction}, ${steps.join(', ')}, transparent 100%)`
            } 
        }
    }

    return {
        ...result,
        ...matchUtility
    }
})

    matchUtilities(utilitiesToMatch, {values: theme('maskImage')})
});
