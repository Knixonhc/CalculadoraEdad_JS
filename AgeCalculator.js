let container = document.querySelector('.container');
let dateInput = container.querySelector('.details .date input');
let monthInput = container.querySelector('.details .month input');
let yearInput = container.querySelector('.details .year input');
let submitBtn = container.querySelector('.submit-btn');

let result = () => {
        let d1 = dateInput.value;
        let m1 = monthInput.value;
        let y1 = yearInput.value;

        let date = new Date();
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();

        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (d1 > d2) {
                d2 = d2 + month[m2 - 1];
                m2 = m2 - 1;
        }
        if (m1 > m2) {
                m2 = m2 + 12;
                y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        container.querySelector('.result').style.display = 'block';
        container.querySelector('.result').innerHTML = `Tu edad es ${y} años ${m} meses ${d} días`;
}

submitBtn.addEventListener('click',result);