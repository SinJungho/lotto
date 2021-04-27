var lotto = [];
while(lotto.length < 6){
    var num = parseInt(Math.random() * 45+1);
    if(lotto.indexOf(num) == -1){ /* 배열에 없음 */
        lotto.push(num);
    }
}
lotto.sort((a,b) => a-b);
document.write("<div class='balls balls1'>" +lotto[0]+ "</div>");
document.write("<div class='balls balls2'>" +lotto[1]+ "</div>");
document.write("<div class='balls balls3'>" +lotto[2]+ "</div>");
document.write("<div class='balls balls4'>" +lotto[3]+ "</div>");
document.write("<div class='balls balls5'>" +lotto[4]+ "</div>");
document.write("<div class='balls balls6'>" +lotto[5]+ "</div>");




