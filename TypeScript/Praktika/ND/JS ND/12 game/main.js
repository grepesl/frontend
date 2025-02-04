{
    const simboliai = {
        _00: "✘",
        _01: "☁",
        _02: "★",
        _03: "☀", 
        _10: "❤",
        _11: "☀",
        _12: "✘",
        _13: "♠",
        _20: "❤",
        _21: "★",
        _22: "☁",
        _23: "♠",
      };
    
    let lastClickedId = '';
    let count = '';

    function shuffleObjectValues(obj) {
        const values = Object.values(obj);
      
        for (let i = values.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [values[i], values[randomIndex]] = [values[randomIndex], values[i]];
        }
      
        const shuffledObj = {};
        Object.keys(obj).forEach((key, index) => {
          shuffledObj[key] = values[index];
        });
      
        return shuffledObj;
    }

    function createParagraph(text){
        const paragraph = document.createElement('p');
        paragraph.classList.add('winner');
        paragraph.textContent = text;
        
        return paragraph;
    }
      
    const shuffledData = shuffleObjectValues(simboliai);

    document
        .querySelectorAll("#cardGame td")
        .forEach(td => td.addEventListener("click", function onTdClicked() {
            const simbolis = shuffledData[td.id];

            if (td.textContent !== simbolis) {
                td.textContent = simbolis;
            }
            if (lastClickedId === '') {
                lastClickedId = td.id;
            } else {
                const lastClickedTd = document.querySelector(`#${lastClickedId}`)

                if (lastClickedTd.textContent === td.textContent) {
                    td.removeEventListener('click', onTdClicked);
                    lastClickedTd.removeEventListener('click', onTdClicked);
                    lastClickedId = '';
                    count++
                } else {
                    setTimeout(() => {
                        lastClickedId = '';
                        lastClickedTd.textContent = '';
                        td.textContent = '';
                    }, 1000);
                }
            }
            if (count === 6) {
                document.body.appendChild(createParagraph('Valio, laimėjai!'));
            }
        }))

        
}