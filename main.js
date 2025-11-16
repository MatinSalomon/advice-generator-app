const adviceIdNumber = document.querySelector('.advice-id-number');
const adviceText = document.querySelector('.advice-text');


const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceIdNumber.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
}

