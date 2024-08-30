document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        { text: "A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden.", author: "Sahih Bukhari 10" },
        { text: "Facilitate things to people (concerning religious matters), and do not make it hard for them and give them good tidings and do not make them run away (from Islam).", author: "Sahih Bukhari 69" },
        { text: "There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).", author: "Bukhari and Muslim" },
        { text: "A man came to the Messenger of Allah (ﷺ) and said, “O Messenger of Allah! Who among the people has the most right to my good company?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Then your father.”.", author: "Bukhari & Muslim" },
        { text: "Beware of suspicion for it is the most untruthful type of speech.", author: "Bukhari & Muslim" },
        { text: "Allah becomes jealous [of His honor] and that is when the believer does something He has forbidden.", author: "Sahih Muslim" },
        { text: "Whoever stands [for night prayer] in Ramadan out of faith and hope for reward will be forgiven his past sins.", author: "Sahih Bukhari" },
        { text: "The Prophet (ﷺ) would never find fault with food. If he desired it, he would eat. If he disliked it, he would leave it.", author: "Bukhari & Muslim" },
        { text: "The fire is surrounded by [unlawful] desires and paradise by difficulties.", author: "Sahih bukhari" },
        { text: "If a man said to his [Muslim] brother, “O Kaafir (disbeliever)”, then that [statement] will return to one of them.", author: "Sahih Bukhari" },
        { text: "Life is really simple, but we insist on making it complicatedAllah is more joyous with the repentance of one of you than you are when you find your lost animal.", author: "Sahih Muslim" },
        { text: "The best fast after Ramadan is in the month of Allah: Muharram. The best prayer after the obligatory one is the night prayer.", author: "Sahih Muslim" },
        { text: "Whoever repents before the sun rises from the west, Allah will accept his repentance.", author: "Sahih Muslim" },
        { text: "That I say: SubhanAllah, Alhamdulillah, La ilaaha illa Allah, and Allahu Akbar is more beloved to me than everything the sun rises on.", author: "Sahih Muslim" },
        { text: "Whoever carried weapons against us is not from among us and whoever cheated us is not from among us.", author: "Sahih Muslim" },
        { text: "Whoever deliberately lies about me, then let him take his seat in the Fire.", author: "Sahih Muslim" },
        { text: "Whoever sent one blessing on me, Allah will send ten blessings on him.", author: "Sahih Muslim" },
        { text: "Every Muslim’s blood, wealth, and honor are forbidden for other Muslims to violate.", author: "Sahih Muslim" },
        { text: "Make an effort, do your best, and know that none of you will enter paradise due to his deeds. The most beloved deed to Allah is the one that is done regularly even if it is small.", author: "Bukhari & Muslim" },
        { text: "None of you will have true faith till he wishes for his (Muslim) brother what he likes for himself.", author: "Bukhari, Iman (Faith), 7; Muslim, Iman (Faith), 71" },
        { text: "No father can give his children a better gift than good manners.", author: "Tirmidhi" },
        { text: "Those who cheat are not of us.", author: "Sahih Muslim" },
        { text: "A believer is not bitten twice from the same hole.", author: "Bukhari & Muslim" },
        { text: "There is no giving of harm to others nor retaliating harm with harm.", author: "Ibn-E-Majah" },
        { text: "The truthful, trustworthy merchant is with the Prophets, the truthful, and the martyrs.", author: "Tirmidhi 1209" },
        { text: "Whoever drinks wine, then lash him. If he returns to it, then on the fourth time kill him.", author: "Tirmidhi 1444" },
        { text: "Whomever you find doing the actions of the people of Lut then kill the one doing it, and the one it is done to.", author: "Tirmidhi 1456" },
        { text: "Do not turn your houses into graves. Indeed Ash-Shaitan does not enter the house in which Surat Al-Baqarah is recited.", author: "Tirmidhi 2877" },
        { text: "Whoever recites the last two Ayat of Surat Al-Baqarah during the night, they shall suffice him.", author: "Tirmidhi 2881" },
        { text: "Whoever recites three Ayat from the beginning of Al-Kahf he is protected from the turmoil of the Dajjal.", author: "Tirmidhi 2886" },
        { text: "Whoever recites Ha Meem Ad-Dukhan during Friday night, he shall be forgiven.", author: "Tirmidhi 2889" },
        { text: "Qul Huwa Allahu Ahad is equal to a third of the Qur'an.", author: "Tirmidhi 2899" },
        { text: "The best of you - or the most virtuous of you - is he who learns the Qur'an and teaches it.", author: "Tirmidhi 2908" },
        { text: "Indeed, the one who does not have the Qur'an inside him (his heart), is like the ruined house.", author: "Tirmidhi 2913" },
        { text: "He does not believe in the Qur'an who makes lawful what it prohibits.", author: "Tirmidhi 2918" },
        { text: "The believer eats with one intestine and the disbeliever eats with seven intestines.", author: "Sunan Ibne Majah 3258" },
        { text: "Going out in the morning in the cause of Allah, or in the evening, is more virtuous than the world and what is in it.", author: "Sunan Ibne Majah 2755" },
        { text: "May Allah have mercy on the one who keeps watch over the troops.", author: "Sunan Ibne Majah 2769" }
    ];

    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    let currentQuoteIndex = 0;

    function displayQuote(quote) {
        quoteElement.classList.add('fade-out');
        setTimeout(() => {
            quoteElement.textContent = quote.text;
            authorElement.textContent = `- ${quote.author}`;
            quoteElement.classList.remove('fade-out');
        }, 1000);
    }

    function getNextQuote() {
        const quote = quotes[currentQuoteIndex];
        displayQuote(quote);
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    // Change quote every 5 seconds
    setInterval(getNextQuote, 5000);

    // Display the first quote on page load
    getNextQuote();

    copyquote.addEventListener("click", function () {
        const quoteText = quoteElement.textContent;
        const textArea = document.createElement("textarea");
        textArea.value = quoteText;

        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        alert("Quote copied to clipboard.");
    });
});