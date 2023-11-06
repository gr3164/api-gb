// JSON-данные с информацией о занятиях
const data = [
    {
        "name": "Занятие 1",
        "time": "10:00",
        "maxCount": 15,
        "curentCount": 7
    },
    {
        "name": "Занятие 2",
        "time": "14:00",
        "maxCount": 10,
        "curentCount": 10
    },
    {
        "name": "Занятие 3",
        "time": "16:30",
        "maxCount": 20,
        "curentCount": 18
    }
];

// Функция загрузки данных в расписание
function loadData() {
    const app = document.getElementById('app');

    // Очищаем расписание перед загрузкой
    app.innerHTML = '';

    // Создаем элементы для каждого занятия
    data.forEach((item, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('col-md-4', 'mb-4');

        const cardContent = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Время проведения: ${item.time}</p>
                    <p class="card-text">Максимальное количество участников: ${item.maxCount}</p>
                    <p class="card-text">Текущее количество записанных участников: ${item.curentCount}</p>
                    <button id="btn-enroll-${index}" class="btn btn-primary btn-enroll${item.curentCount >= item.maxCount ? ' disabled' : ''}">Записаться</button>
                    <button id="btn-cancel-${index}" class="btn btn-danger btn-cancel${item.curentCount === 0 ? ' disabled' : ''}">Отменить запись</button>
                </div>
            </div>
        `;

        cardElement.innerHTML = cardContent;
        app.appendChild(cardElement);

        const enrollBtn = document.getElementById(`btn-enroll-${index}`);
        const cancelBtn = document.getElementById(`btn-cancel-${index}`);

        enrollBtn.addEventListener('click', () => {
            if (item.curentCount < item.maxCount) {
                item.curentCount++;
                loadData();
            }
        });

        cancelBtn.addEventListener('click', () => {
            if (item.curentCount > 0) {
                item.curentCount--;
                loadData();
            }
        });
    });

    
}


document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

