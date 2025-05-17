
const list = document.querySelectorAll('.nav-list li');

/*

list.forEach((item) => {

    item.addEventListener('click', (e) => {

        list.forEach((li) => {

            li.classList.remove('active');
        })

        e.currentTarget.classList.add('active');

    })
})

*/

const hundleActiveLink = (e) => {

    list.forEach(li => li.classList.remove('active'));

    e.currentTarget.classList.add('active');

}

list.forEach(item => item.addEventListener('click', hundleActiveLink));