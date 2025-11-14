let currentLang = "en"
const languageButton = document.querySelector("#language-switcher")
languageButton.addEventListener('click', () => {
    if (currentLang = "th") {
        currentLang = "en"
        languageButton.content = "english / ภาษาอังกฤษ";
        html.lang = "en"
    } else {
        currentLang = "th"
        languageButton.content = "thai / ภาษาไทย";
        html.lang = "th"
    }
})