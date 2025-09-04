"use strict";
// 26. Use async/await with setTimeout to simulate a 5-second wait.
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function simulateWait() {
    console.log("Bắt đầu chờ 5 giây...");
    await wait(5000);
    console.log("Đã chờ xong 5 giây!");
}
simulateWait();
