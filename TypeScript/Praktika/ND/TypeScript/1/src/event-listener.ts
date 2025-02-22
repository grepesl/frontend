const inputField: HTMLInputElement | null = document.querySelector('#input');
const result: HTMLParagraphElement | null = document.querySelector('#result');

if (inputField === null) throw new Error('Neteisingas įvesties lauko selektorius');
if (result === null) throw new Error('Neteisingas rezultatų konteinerio selektorius');

const handleFieldChange: EventListener = (event) => {
  const element: HTMLInputElement = event.target as HTMLInputElement;
  result.innerHTML = element.value;
};

inputField.addEventListener('keyup', handleFieldChange);

//Papildykite public/index.html failą reikiamais HTML elementais, jog kartu su sukompiliuotu  src/event-listener.ts failu gautume automatinį kodo kopijavimą po įvesties lauku.

