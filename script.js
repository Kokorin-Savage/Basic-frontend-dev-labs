var key = new Boolean(false)
var username;

function button_su() {
    if (key === true) {
        alert("Я это сделал, а " + username + " тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”")
    } else {
        username = prompt("Привет, скажи твоё имя.");
        if (username === "" || username == null){
            alert("Поле не должно быть пустым")
            return;
        }
        alert("Я это сделал, а " + username + " тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”");
        key = true;
    }
}
