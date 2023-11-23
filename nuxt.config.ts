// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/image"],
  ui: {
    notifications: {
      position: "lg:top-0 lg:justify-start",
    },
    icons: ["simple-icons"],
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
