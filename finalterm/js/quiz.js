var Question = [
["ベジタリアンは食べるけど、ヴィーガンの人は食べないものはなんだ？",
"1. document.write('Hello World');",
"2. document.write(Hello World);",
"3. document.write('Hello World')",
"1"],


var Q = document.getElementById('ベジタリアンは食べるけど、ヴィーガンの人は食べないものはなんだ？');
var A1 = document.getElementById('蜂蜜');
var A2 = document.getElementById('鶏肉');
var A3 = document.getElementById('海藻');
 


var Correct = 0;

var Qcnt = 0;

Q_Set();


function Q_Set() {
Q.textContent = Question[Qcnt][0];
A1.textContent = Question[Qcnt][1];
A2.textContent = Question[Qcnt][2];
A3.textContent = Question[Qcnt][3];
};

function Answer_Check(ans) {
if(ans == Question[Qcnt][4]) {
alert("正解");
Correct++;
} else {
alert("不正解");
}
Qcnt++;
if (Qcnt == Question.length) {
Q.textContent = "問題は以上です。正解数は" + Correct + "でした。";
A1.textContent = "蜂蜜";
A2.textContent = "海藻";
A3.textContent = "鶏肉";
} else {
Q_Set();
}
}
