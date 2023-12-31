// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  ui: {
    icons: ["simple-icons"],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  colorMode: {
    preference: "dark",
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    build: {
      rollupOptions: {
        external: ["emanuel-carrero.webp"],
      },
    },
  },
  imports: {
    dirs: ["validation/**/*.ts", "models/**/*.ts"],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          animation: {
            marquee: "marquee 25s linear infinite",
            marquee2: "marquee2 25s linear infinite",
          },
          keyframes: {
            marquee: {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-100%)" },
            },
            marquee2: {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(0%)" },
            },
          },
        },
      },
    },
  },
});
