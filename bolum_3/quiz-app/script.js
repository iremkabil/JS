const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");

})
 
ui.btn_next.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        clearInterval(counter);
        startTimer(10);
        clearInterval(counterLine);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }
    // soru indexi soru sayisina eşits olunca - sorular bitince
    else{
        clearInterval(counter);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// QUIT
ui.btn_quit.addEventListener("click", function(){
    // sayfa tekrar yüklenir
    window.location.reload();
});

// REPLAY
ui.btn_replay.addEventListener("click", function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);

    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    // döngünün tüm çocuk öğeler üzerinde dönmesini sağlar.
    for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");

}

let counter;

function startTimer (time) {
    // 1000 saniyede 1 bu metodu çağıracak
    counter = setInterval(timer,1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if (time < 0){
            // Bu metoda temizlenecek olan setIntervel'ın referansını vermiş oluyorsunuz yani bellekteki adresini vermiş oluyorsunuz
            // Süre bittiğinde fonksiyonu durdurur
            clearInterval(counter);
            
            ui.time_text.textContent = "Süre Bitti";
            
            // dogruCevap?????????
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                // devre dışı bırakmak
                option.classList.add("disabled");
            }
            // görünür kılmak
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval (timer, 20);

    function timer (){
        line_width += 1;
        ui.time_line.style.width = line_width +"px";

        if(line_width > 549){
            clearInterval(counterLine);
        }
    }
}


