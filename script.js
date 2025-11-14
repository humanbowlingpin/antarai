let currentLang = "en"
const languageButton = document.querySelector("#language-switcher")
languageButton.addEventListener('click', () => {
    console.log(currentLang)
    if (currentLang == "th") {
        currentLang = "en"
        languageButton.innerHTML = "english / ภาษาอังกฤษ"
        document.documentElement.setAttribute('lang', 'en')
    } else {
        currentLang = "th"
        languageButton.innerHTML = "thai / ภาษาไทย"
        document.documentElement.setAttribute('lang', 'th')
    }
    console.log(currentLang)
})