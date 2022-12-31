import React, { useEffect } from "react";

export default function Main() {
    const Countdown = () => {
        var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("demo").innerHTML = days + " วัน " + hours + " ชั่วโมง "
                + minutes + " นาที " + seconds + " วินาที ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Happy New Year 2023 สุขสันต์วันปีใหม่ขอให้มีความสุขกันทุกคนครับบ ขอบคุณที่เข้ามาเยี่ยมเว็บไซค์ของผมนะครับ ขอบคุณจากใจจริงง😙🤍";
            }
        }, 1000);
    }

    useEffect(() => {
        Countdown();
    })

    return (
        <>
            <div>
                <h1 className="font-bold text-2xl mt-20 mx-5 text-center">Countdown Time of 2024 🗓</h1>
                <p className="text-lg text-center" id="demo"></p>
                <img className="w-56 mx-auto my-0 mt-20" src="https://camo.githubusercontent.com/b1f010b2737341e33371137cc7de1eb109bad190fbe12c2a7a6baa6a13e81ae5/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f39642f39622f64312f39643962643133616663653161373938643232656366643938393737333065642e676966" alt="computer" />
            </div>
        </>
    )
}