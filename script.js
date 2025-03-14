const employees = [
    { name: "Дима Г.", greeting: "Ленчик, Хочу поздравить тебя с прекрасным праздником с твоим днем рождением. Желаю крепкого здоровья, ведь оно сейчас в приоритете, успехов в карьере. И настоящего женского счастья. Пусть все твои мечты сбываются и все цели достигаются🥰🔥❤️", character: 1, long: true },
    { name: "Никита", greeting: "Поздравляю с твоим днем! Побольше душевного спокойствия, приятных денежный оповещений, только побед, громких успехов, чтобы каждый день был наполнен радостью и милотой! И по традиции щастья-здоровья!", character: 2 },
    { name: "Ира К.", greeting: "Лена, с днем рождения! Желаю огромного счастья, и побольше незабываемых моментов в жизни. Улыбайтесь чаще, вам так идет улыбка!", character: 3 },
    { name: "Аля", greeting: "Елена, поздравляю тебя с Днём Рождения! Желаю тебе: если неожиданностей - то приятных! Если приключений - то весёлых! Если усталости - то от любимых дел! А если головокружения - то от любви! Будь счастлива!", character: 4, long: true },
    { name: "Дима С.", greeting: "Лена, с днем рождения! Я не буду тебе банально желать здоровья, счастья, потому что даже у людей на Титанике были и здоровье и богатство и хорошая жизнь, но в нужный момент от них отвернулась удача, так вот, желаю, чтобы от тебя удача никогда в жизни не отворачивалась! Ещё раз с праздником💙", character: 5, long: true },
    { name: "Эля", greeting: "Лена, поздравляю с днём рождения! Пусть все планы твои сбываются, а возможности способствовали этому. Пусть будет всё, о чем желаешь, и столько, сколько хочется 💐 С праздником!", character: 6 },
    { name: "Миша", greeting: "Лена, с Днем рождения! Самый лучший руководитель и просто очень хороший и добрый человек. Как и все желаю счастья,здоровья и всего самого наилучшего, и знай, 12 из 19 это больше половины)", character: 7, long: true },
    { name: "Андрей", greeting: "Поздравляю с Днём Рождения! Пожелать могу веселья, больше радости, везения. Будь счастливой и здоровой, оставайся самой самой! 🎉🥳", character: 8 },
    { name: "Илья", greeting: "Лена, с Днём Рождения! По классике, счастья-здоровья желаю, чтобы всё задуманное получалось и мечты сбывались. Море радости и позитива, и чтобы всю жизнь тебя сопровождала фортуна. Всех благ и всего самого наилучшего. С твоим днём🥳🎉", character: 9, long: true },
    { name: "Тима", greeting: "Лена, с днём рождения! В эту ночь, когда свечи мерцают на торте, а вокруг царит атмосфера праздника, помни: в мире полно тайн и загадок. Пусть каждый твой шаг будет осторожным, ведь даже в самых обычных вещах может скрываться нечто зловещее. Желаю, чтобы твои силы были крепкими, а интуиция -- острой, как лезвие ножа. Пусть каждый твой день будет полон захватывающих приключений, но помни: опасность может поджидать за каждым углом. Лена, и пусть удача всегда будет на твоей стороне!", character: 10, long: true },
    { name: "Ира Ш.", greeting: "Поздравляю с днем рождения! Пусть сбываются мечты, пусть всё вокруг радует тебя, вдохновляет и приносит самые яркие эмоции! Желаю приятных путешествий, самых лучших людей на твоем жизненном пути и море удовольствия от всего, что ты делаешь!", character: 11, long: true },
    { name: "Виталя", greeting: "С днем рождения Лена! В этот особенный день хочу поздравить тебя и выразить свои искренние пожелания. Ты — замечательный руководитель и удивительный человек, который вдохновляет нас своим примером. Желаю, чтобы каждый день приносил радость и счастье, чтобы в жизни было больше светлых моментов и приятных сюрпризов. Пусть все мечты сбываются, а рядом всегда будут верные друзья. Спасибо за твою мудрость и поддержку. Пусть впереди будет много новых достижений и ярких впечатлений!", character: 12, long: true },
    { name: "Глеб", greeting: "Дорогая Лена! Поздравляю тебя с днем рождения 🎉🎉🎉 В жизни только радости, счастья, любови и как можно больше теплых моментов. Мы тебя любим!", character: 13 },
    { name: "Вика", greeting: "Кулешка, поздравляю с Днём Рождения! Оставайся такой же красивой, доброй, весёлой и жизнерадостной, надеюсь увидимся на слёте и напьёмся пива, люблю❤️❤️❤️", character: 14, long: true }
];

const loadingScreen = document.querySelector('.loading-screen');
const startButton = document.querySelector('.start-button');
const mainScreen = document.querySelector('.main-screen');
const greetingText = document.querySelector('.greeting-text');
const characters = document.querySelectorAll('.character');
const cardsContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');

function typeText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    element.style.opacity = 1;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function launchFireworks(x, y) {
    confetti({
        particleCount: 350,
        spread: 100,
        origin: { x, y },
        shapes: ['heart', 'circle'],
        colors: ['#ff0000', '#ff69b4', '#ff1493', '#FFC0CB'],
        scalar: 1.5
    });

    setTimeout(() => {
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { x: x - 0.1, y: y - 0.1 },
            colors: ['#FFD700', '#FFA500', '#FF4500', '#ffffff']
        });
    }, 200);

    setTimeout(() => {
        confetti({
            particleCount: 300,
            spread: 90,
            origin: { x: x + 0.1, y: y - 0.05 },
            colors: ['#00BFFF', '#1E90FF', '#4169E1', '#ffffff', '#ADFF2F']
        });
    }, 400);
}

function init() {    
    startButton.addEventListener('click', () => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainScreen.style.opacity = '1';
            typeText(greetingText, 'С Днём Рождения, Лена!');
        }, 500);
    });

    employees.forEach((employee) => {
        const imagePath = `./LENA/img/${employee.character}.png`;

        const card = document.createElement('div');
        card.className = 'employee-card desktop-card';

        const messageClass = employee.long ? 'greeting-message long-message' : 'greeting-message';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img class="employee-image" src="${imagePath}" alt="${employee.name}">
                    <div class="employee-name">${employee.name}</div>
                </div>
                <div class="card-back">
                    <div class="${messageClass}">${employee.greeting}</div>
                    <img class="employee-avatar" src="${imagePath}" alt="${employee.name}">
                    <button class="thank-you-btn">НАЖМИ! <3</button>
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);

        const rotation = Math.random() * 10 - 5;
        card.style.transform = `rotate(${rotation}deg)`;
    });

    document.querySelectorAll('.employee-card').forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped')) {
                card.classList.add('flipped');
                overlay.classList.add('active');
            }
        });

        const thankButton = card.querySelector('.thank-you-btn');
        if (thankButton) {
            thankButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const rect = thankButton.getBoundingClientRect();
                const x = (rect.left + rect.right) / 2 / window.innerWidth;
                const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

                launchFireworks(x, y);

                setTimeout(() => {
                    card.classList.remove('flipped');
                    overlay.classList.remove('active');
                }, 1500);
            });
        }
    });

    overlay.addEventListener('click', () => {
        document.querySelectorAll('.employee-card.flipped').forEach(card => {
            card.classList.remove('flipped');
        });
        overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.employee-card.flipped')) {
            document.querySelectorAll('.employee-card.flipped').forEach(card => {
                card.classList.remove('flipped');
            });
            overlay.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
