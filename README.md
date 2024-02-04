# Gradient Mask plugin for Tailwind CSS

Tailwind CSS plugin for adding `mask-image` with a `linear-gradient` on a HTML element.

<img src="screenshot.png" width="400">

Try it out in [Tailwind CSS Playground](https://play.tailwindcss.com/ZAQrbYa3wH)

[MDN docs on mask-image](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image)

## Installation

With npm
```bash
npm install tailwind-gradient-mask-image
```

With yarn
```bash
yarn add tailwind-gradient-mask-image
```

## Configuration

Add the plugin to your `tailwind.config.js`

```js
{
    plugins: [require("tailwind-gradient-mask-image")]
}
```

## Usage

```html
<div class="gradient-mask-t-0">
    ...
</div>
```

The plugin creates classes with prefix `gradient-mask-`. After the prefix follows a direction shorthand and the gradient start percentage.

The class above matches the css
```css
.class {
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, transparent 100%);
}
```

> Using `gradient-mask-none` will set the CSS property to `mask-image: none`. This can be used in combination of breakpoints for device-specific behaviors

## Variations

Direction shorthands
```js
{
  t: "to top",
  tr: "to top right",
  r: "to right",
  br: "to bottom right",
  b: "to bottom",
  bl: "to bottom left",
  l: "to left",
  tl: "to top left",
} 
```

The gradient start percentages go from 0% to 100% with 10% gaps.


## Arbitrary values

You can use arbitrary values to specify unique steps towards a specific direction

```html
<div class="gradient-mask-t-[transparent,rgba(0,0,0,1.0)_30px,rgba(0,0,0,0.5)_40%]">
    ...
</div>
```

The class above matches the following css

```css
.class {
    mask-image: linear-gradient(to top, transparent, rgba(0,0,0,1.0) 30px, rgba(0,0,0,0.5) 40%, transparent 100%)
}
```

> A transparent at 100% will always be set to keep a specific direction
>
> You can always add `transparent_80%` at the end of your abitrary value to have the last 20% fully masked

