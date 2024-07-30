export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"主页\",\"link\":\"/\",\"activeMatch\":\"/\"},{\"text\":\"语言\",\"children\":[{\"text\":\"编程\",\"children\":[{\"text\":\"C\",\"link\":\"https://code.iglooblog.top/c/1.html\"},{\"text\":\"Js\",\"link\":\"/js/\"}]},{\"text\":\"标记\",\"children\":[{\"text\":\"HTML\",\"link\":\"https://code.iglooblog.top/html/1.html\"},{\"text\":\"Markdown\",\"link\":\"https://1m29yg5p67.k.topthink.com/@markdown\"},{\"text\":\"CSS\",\"link\":\"https://code.iglooblog.top/css/1.html\"}]}]},{\"text\":\"课程\",\"children\":[{\"text\":\"政治\",\"link\":\"politics\"},{\"text\":\"英语\",\"link\":\"english\"}]},{\"text\":\"关于\",\"link\":\"/about\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
