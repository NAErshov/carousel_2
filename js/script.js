    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 2;
    const container = document.querySelector('.slider-container');    
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next'); 
    // Сумарное колличество элементов
    const item = document.querySelectorAll('.slider-item');
    const itemCount = item.length;
    // Находим ширину каждого элемента
    const itemWidth = container.clientWidth / slidesToShow;
    // Чтобы понять сколько нам нужно проскролить, необходимо выполнить простое умножение
    const movePosition = slidesToScroll * itemWidth;

    item.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

     // Функции для наших кнопок
    btnNext.addEventListener('click', () => {
        const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        chechBtns();
    });


    btnPrev.addEventListener('click', () => {
        const itemLeft = Math.abs(position) / itemWidth;
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        chechBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    // Проверяем активны ли наши кнопки или нет
    const chechBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    };

    chechBtns();