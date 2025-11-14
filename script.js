let currentLang = localStorage.getItem('lang') || "en"
const languageButton = document.querySelector("#language-switcher")

if(languageButton) {
    languageButton.addEventListener('click', () => {
        currentLang == "en" ? currentLang = "th" : currentLang = "en"
        localStorage.setItem('lang', currentLang)
        displayLanguage()
    })
}

function displayLanguage () {
    currentLang == "en" ? document.documentElement.setAttribute('lang', 'en') : document.documentElement.setAttribute('lang', 'th')
    if (languageButton) currentLang == "en" ? languageButton.innerHTML = "ภาษาไทย" : languageButton.innerHTML = "english"
}

displayLanguage()