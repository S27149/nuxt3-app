// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer:{
    port: 8080
  },
  modules: [
    "@nuxtjs/i18n",
  ],
  /**
   * i18n国际化配置
   */
  i18n: {
    compilation: {
      // jit: false,
      strictMessage: false,
      escapeHtml: true,
    },
    // 语言包文件夹
    langDir: "locales",
    lazy: true,
    baseUrl: " http://localhost:8080",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        // 语言包文件
        file: "en-US.ts",
        name: "English",
      },
      {
        code: "zh-CN",
        iso: "zh-CN",
        // 语言包文件
        file: "zh-CN.ts",
        name: "简体中文",
      },
    ],
    // trailingSlash: true,
    debug: false,
    // 默认文字
    defaultLocale: "zh-CN",
    // 路由是否需要加入前缀（/zh、/en）
    strategy: "no_prefix",
    dynamicRouteParams: true,
    detectBrowserLanguage: {
      // 是否使用cookie
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "root",
    },
  },
})
