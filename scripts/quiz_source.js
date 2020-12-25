class Question {
    constructor(qName, answer) {
        this.qName = qName;
        //Номера answer:
        //1-manga, 2-ranobe, 3-game, 4-original
        this.answer = answer;
    }

    get questionName() {
        return this.qName;
    }
}

let questions = [
    new Question("Невероятное приключение ДжоДжо", 1),
    new Question("Убийца Акаме!", 1),
    new Question("Тетрадь Смерти", 1),
    new Question("Прощай, безрадостный учитель", 1),
    new Question("Наруто", 1),
    new Question("Госпожа Кагуя: в любви как на войне", 1),
    new Question("Обещанный Неверленд", 1),
    new Question("Ванпанчмен", 1),
    new Question("Великий из бродячих псов", 1),

    new Question("Konosuba", 2),
    new Question("Мастера меча онлайн", 2),
    new Question("Повелитель", 2),
    new Question("Re:Zero", 2),
    new Question("Военная хроника маленькой девочки", 2),
    new Question("Ты же любишь мамочку, удары которой бьют по площади двойным уроном?", 2),
    new Question("Судьба/Начало", 2),
    new Question("Волчица и пряности", 2),

    new Question("Когда плачут цикады", 3),
    new Question("Судьба/Ночь схватки", 3),
    new Question("Переворотный суд", 3),
    new Question("Steins;Gate", 3),
    new Question("Школьные дни", 3),

    new Question("Психопаспорт", 4),
    new Question("Милый во Франксе", 4),
    new Question("Евангелион нового поколения", 4),
    new Question("Ковбой Бибоп", 4),
    new Question("Kill la Kill", 4),
    new Question("Гуррен-Лаганн", 4),
    new Question("Унесённые призраками", 4)
];

let score = 0;
let count = 0;
//инициализируем список из 10 вопросов
let quest = [];
for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * questions.length);
    let q = questions[index];
    questions.splice(index, 1);
    quest.push(q);
}
let currentQuestion = quest[0];

let startButton = document.getElementById("button_begin");
startButton.addEventListener('click', event => {
    quiz();
});

let form = document.createElement("form");
form.name = "form";

function quiz() {
    //пересоздаем список из 10 вопросов
    for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * questions.length);
        let q = questions[index];
        questions.splice(index, 1);
        quest.push(q);
    }

    //создание формы
    let questionText = document.createElement("p");
    questionText.className = "big-text";
    questionText.style.textAlign = 'center';
    form.appendChild(questionText);

    let p1 = document.createElement("p");
    p1.className = "question";
    let radio1 = document.createElement("input");
    radio1.name = "answer";
    radio1.value = "1";
    radio1.setAttribute("type", "radio");
    p1.appendChild(radio1);
    p1.appendChild(document.createTextNode("Основано на манге"));
    form.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "question";
    let radio2 = document.createElement("input");
    radio2.name = "answer";
    radio2.value = "2";
    radio2.setAttribute("type", "radio");
    p2.appendChild(radio2);
    p2.appendChild(document.createTextNode("Основано на ранобэ"));
    form.appendChild(p2);

    let p3 = document.createElement("p");
    p3.className = "question";
    let radio3 = document.createElement("input");
    radio3.name = "answer";
    radio3.value = "3";
    radio3.setAttribute("type", "radio");
    p3.appendChild(radio3);
    p3.appendChild(document.createTextNode("Основано на игре"));
    form.appendChild(p3);

    let p4 = document.createElement("p");
    p4.className = "question";
    let radio4 = document.createElement("input");
    radio4.name = "answer";
    radio4.value = "4";
    radio4.setAttribute("type", "radio");
    p4.appendChild(radio4);
    p4.appendChild(document.createTextNode("Является оригинальным произведением"));
    form.appendChild(p4);

    /*    let confirmButton = document.createElement("input");
        confirmButton.type = "submit";
        confirmButton.addEventListener("click", check);
        //confirmButton.addEventListener("click", check);
        form.appendChild(confirmButton);*/
    let greet_text = document.getElementById("test_greet");
    greet_text.replaceWith(form);
    questionText.innerText = currentQuestion.questionName;

    //добавление события кликов
    for (let i = 0; i < form.answer.length; i++) {
        form.answer[i].addEventListener("click", function () {
            let answer = event.target.value;
            answer = parseInt(answer);
            check(answer, currentQuestion);
            nextQuestion();
            for (let i = 0; i < form.answer.length; i++) {
                form.answer[i].checked = false;
            }
            questionText.innerText = currentQuestion.questionName;
        });
    }
}

function nextQuestion() {
    count++;
    if (count < 10) {
        currentQuestion = quest[count];
    } else {
        testOver();
    }
}

function check(ans, q) {
    if (q.answer === ans) {
        alert("Верно");
        score++;
    } else alert("Неверно");
}

function testOver() {
    let final = document.createElement("div");
    final.id = "final";
    let mes = document.createElement("p");
    mes.innerText = "Ваш балл";
    let sc = document.createElement("p");
    sc.id = "sc";
    sc.style.textAlign = 'center';
    sc.innerText = score + "/" + "10";
    final.appendChild(mes);
    final.appendChild(sc);
    //комментарий по оценке
    let comText;
    if (score <= 4) comText = "Вам предстоит получше узнать об аниме.";
    else if (score <= 6) comText = "Вы неплохо знаете об аниме.";
    else if (score <= 8) comText = "Вы хорошо знаете первоисточники. Достойный результат!";
    else if (score === 9) comText = "Вы ответили правильно почти на все вопросы! Некоторых тайтлов, присутствующих в тесте, не было в статье. Значит, вы и без этого сайта уже много знаете?";
    else if (score === 10) comText = "Вы ответили правильно на все вопросы!!! Хм, вам точно нужен этот сайт? Ведь некоторых тайтлов в статье не было, а значит, вы все знали и без сайта...";
    let com = document.createElement("p");
    com.id = "com";
    com.innerText = comText;
    final.appendChild(com);
    let rep = document.createElement("a");
    rep.id = "repeat";
    rep.href = "test-source.html";
    rep.innerText = "Пройти еще раз";

    final.appendChild(rep);

    form.replaceWith(final);

}