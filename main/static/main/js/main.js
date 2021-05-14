var slider = {},
    output = {},
    result = {
        "result1": 25,
        "result2": 5,
        "result3": 15,
    };

for (let i = 1; i < 4; i++) {
    slider["slider_" + i] = document.getElementById("timer_" + i);
    output["output_" + i] = document.getElementById("value_" + i);
    output["output_" + i].innerHTML = slider["slider_" + i].value; // Display the default slider value

    slider["slider_" + i].oninput = function() {
        output["output_" + i].innerHTML = this.value;
        result["result" + i] = this.value;
    }
}

var x = 0;
function CountDownTimer(countDownTime){
      var now = new Date().getTime();
      var distance = countDownTime - now;
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = minutes + ":" + seconds;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "00:00";
      }
}

for (let i = 1; i < 4; i++) {
    $('#btn_' + i).click(function(){
        let num = Number(result["result" + i]);
        var countDownTime = new Date();
        countDownTime.setMinutes(countDownTime.getMinutes() + num);
        clearInterval(x)
        x = setInterval(function(){ CountDownTimer(countDownTime) }, 1000);
    })
}

$('#btn_stop').click(function(){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "00:00";
})