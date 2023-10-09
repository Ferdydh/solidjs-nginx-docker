import { defineConfig } from '@unocss/vite';
import { presetAttributify, presetIcons, presetWebFonts, presetWind } from 'unocss';
import presetTagify from '@unocss/preset-tagify'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        montserrat: ['Montserrat'],
      },
    }),
    presetTagify(),
    presetIcons(),
  ],
});
