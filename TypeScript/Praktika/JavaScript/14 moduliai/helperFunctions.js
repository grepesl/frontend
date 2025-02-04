const randomColor = () => {
    return `rgb(${[1,1,1].map(() => Math.random()*256|0)})`;
}

function randomNumberTo(to){
    return Math.floor(Math.random()*(to + 1))
}

export function capitalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}