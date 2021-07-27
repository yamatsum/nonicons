# Nerd Font-Friendly Nonicons

## This is a fork
This is a fork of the work done by [yamatsum](https://github.com/yamatsum/nonicons).

The goal here is to update the mappings so that the nonicon glyphs do not conflict with the glyph codepoints set by FontAwesome/Nerd-Patched fonts
Once the yamatsum's repo supports dynamically assigning codepoints, this fork will become irrelevant.

See also: [nvim-nonicons](https://github.com/arnamak/nvim-nonicons)

## Summary
Nonicons are a set of SVG icons representing programming languages and development tools.

## Installation
You probably just need to take `nonicons.ttf` from the `dist/` folder and place it somewhere in your font path (e.g. `/usr/share/fonts/TTF/` on linux)

If you want to use these icons with neovim, please see my fork of [nvim-nonicons](https://github.com/arnamak/nvim-nonicons)

## Tips
- Once the font is installed on your system, you might need to configure your terminal to have access to the `nonicons` font. That process is different for different terminal emulators.
  Check to see if your terminal supports loading multiple fonts side-by-side. If so, specify `nonicons` alongside the font of your choice in your configuration. 

- If your terminal emulator does not support loading multiple fonts, you will need a patched version of your font so as to include `nonicons` in its icon set.
  One way to achieve this can be by following the [patch your own font](https://github.com/ryanoasis/nerd-fonts#option-8-patch-your-own-font) instructions in the Nerd Fonts README.

- A quick guide to patch your own 'complete' font:
  1. Clone the [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) repo.
  2. Install `fontforge` (follow the instructions in the Nerd Fonts guide).
  3. Find the font you want in the [`src/unpatched-fonts`](https://github.com/ryanoasis/nerd-fonts/tree/master/src/unpatched-fonts) (or your own). Henceforth this will be referred to as `<PATH_TO_YOUR_FONT>`.
  4. Plop the [`nonicons.ttf`](https://github.com/arnamak/nonicons/blob/master/dist/nonicons.ttf) into the [`src/glyphs`](https://github.com/ryanoasis/nerd-fonts/tree/master/src/glyphs) directory in your cloned copy of the Nerd Fonts repo.
  5. From the Nerd Font's root (wherever the font-patcher executable is), run:
  ```
  ./font-patcher <PATH_TO_YOUR_FONT> -c --custom nonicons.ttf
  ```
  6. Install the file that `font-patcher` generated via the steps in the `Installation` section above.
  7. Change your terminal font to your newly patched version.

## Thank yamatsum
- This repo only exists to make my life easier when I inevitably need to do this again after changing my environment. The icons are not mine, the idea isn't mine, and it's extremely unlikely I do anything in terms of maintenance. So if you have a 'thanks' in you, shoot it over to [yamatsum](https://github.com/yamatsum/nonicons)
