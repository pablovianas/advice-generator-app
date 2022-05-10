const buttonClick = document.querySelector('button');
const updateDivAdvice = document.querySelector('.advice')

buttonClick.addEventListener('click', async () => {

    const response = await fetch('https://api.adviceslip.com/advice');
    const adviceContent = await response.json();  

    const adviceId = `Advice #${adviceContent.slip.id}`

    const adviceText = `"${adviceContent.slip.advice}"`

    $('span').html(adviceId);
    $('p').html(adviceText);
})