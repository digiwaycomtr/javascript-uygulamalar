
document.getElementById('input-number').addEventListener('input', (e) => updateCardNumber(e.target.value));

const updateCardNumber = (value) => {

    const cleaned = value.replace(/\D/g, '').substring(0, 19);

    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();

    //console.log("kart numarası:", formatted)

    document.getElementById('card-number').innerText = formatted.padEnd(19, '#')
}

document.getElementById('input-name').addEventListener('input', (e) => updateCardHolder(e.target.value));

const updateCardHolder = (value) => {

    // console.log("kart sahibi:", value);

    document.getElementById('card-holder').innerText = value || 'İsim Soyisim';

}

const yearSelect = document.getElementById('expriy-year');
const currentYear = new Date().getFullYear();

for (let i = 0; i < 10; i++) {

    const option = document.createElement('option');

    option.value = (currentYear + i).toString().slice(-2);

    //console.log(option.value)

    option.textContent = currentYear + i;

    yearSelect.appendChild(option);

}

const updateCardExpriy = () => {

    const month = document.getElementById('expriy-month').value;
    const year = document.getElementById('expriy-year').value;

    //console.log(month, year)

    document.getElementById('card-expriy').innerText = (month && year) ? `${month}/${year}` : 'MM/YY';

}

document.getElementById('expriy-month').addEventListener('change', updateCardExpriy);
document.getElementById('expriy-year').addEventListener('change', updateCardExpriy);


document.getElementById('input-cvv').addEventListener('input', (e) => updateCardCVV(e.target.value));

const updateCardCVV = (value) => {

    const cleaned = value.replace(/\D/g, '').substring(0, 3);

    //console.log(cleaned)

    document.getElementById('card-cvv').innerText = cleaned.padEnd(3, '*');

}


document.getElementById('input-cvv').addEventListener('focus', () => flipCard(true));
document.getElementById('input-cvv').addEventListener('blur', () => flipCard(false));


const flipCard = (isBack) => {

    document.getElementById('card').classList.toggle('flip', isBack);
}

document.getElementById('pay-button').addEventListener('click', () => {

    const number = document.getElementById('input-number').value;
    const name = document.getElementById('input-name').value;
    const month = document.getElementById('expriy-month').value;
    const year = document.getElementById('expriy-year').value;
    const cvv = document.getElementById('input-cvv').value;

    console.log(number, name, month, year, cvv)
    if (number.length === 16 && name && month && year && cvv.length === 3) {
        alert('Ödeme sayfasına yönlendiriliyorsunuz...');
    } else {
        alert('Lütfen tüm alanları doğru şekilde doldurunuz.');
    }

});
















