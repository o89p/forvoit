browser.menus.create({
  id: "forvoit",
  title: "Forvo it! #es",
  contexts: ["all"]
});

browser.menus.onClicked.addListener((info, tab) => {
  browser.tabs.create({
    "index": tab.index + 1,
    "url": `https://ja.forvo.com/word/${info.selectionText}/#es`
  })
});
