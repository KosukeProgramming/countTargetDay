const btn = document.querySelector(".submit");
btn.addEventListener("click", function () {
    // 日付を取得
    const date = document.querySelector('.textbox').value;

    // 一日のミリ秒
    const secondsPerDay = 1000 * 60 * 60 * 24;

    // 目標日付
    const targetDate = date;

    // 目標日付の秒数
    const targetDateSeconds = Date.parse(targetDate);
    console.log("目標：" + targetDateSeconds);

    // 現在日付の秒数
    const nowDateSeconds = Date.now();
    console.log("現在：" + nowDateSeconds);

    // 目標と現在の差分秒数
    const differenceSeconds = targetDateSeconds - nowDateSeconds;
    console.log("差分：" + differenceSeconds);

    // 目標と現在の差分日数
    const differenceDates = Math.floor(differenceSeconds / secondsPerDay);
    console.log(targetDate + "まで残り「" + differenceDates + "」日");

    const day = document.querySelector(".day");
    day.textContent = differenceDates + "日";
});
