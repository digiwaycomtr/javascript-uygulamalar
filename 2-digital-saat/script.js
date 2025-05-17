
const updateClock = () => {

    const now = new Date();

    const hours = now.toLocaleString('tr-TR', {
        hour: '2-digit',
        hour12: false,
        timeZone: 'Europe/Istanbul'
    });

    const minutes = now.toLocaleString('tr-TR', {
        minute: '2-digit',
        timeZone: 'Europe/Istanbul'
    });

    const seconds = now.toLocaleString('tr-TR', {
        second: '2-digit',
        timeZone: 'Europe/Istanbul'
    });

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;


}

setInterval(updateClock, 1000);