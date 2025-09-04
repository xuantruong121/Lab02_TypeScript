"use strict";
// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs
// when done.
async function downloadFile(filename) {
    return new Promise((resolve) => {
        console.log(`Starting download: ${filename}...`);
        setTimeout(() => {
            console.log(`Download completed: ${filename}`);
            resolve();
        }, 3000); // 3 giây
    });
}
// Test
(async () => {
    await downloadFile("example.pdf");
})();
