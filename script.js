// ====== CẤU HÌNH ======
const API_KEY = "AIzaSyAoC10UTsVyMCq4x57ICfYV_WLeKEx0yrg";
const CHANNEL_ID = "UCLnX7s80sPp3JdArqyhh3DQ";

// ====== MENU ======
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

if (menuBtn) {
    menuBtn.onclick = () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    };
}

if (overlay) {
    overlay.onclick = () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    };
}

// ====== LOAD THÔNG TIN KÊNH ======
async function loadChannel() {

    if (!document.getElementById("channelName")) return;

    try {

        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            console.log("Không tìm thấy kênh");
            return;
        }

        const c = data.items[0];

        document.getElementById("avatar").src =
            c.snippet.thumbnails.high.url;

        document.getElementById("channelName").innerHTML =
            c.snippet.title;

        document.getElementById("subs").innerHTML =
            Number(c.statistics.subscriberCount).toLocaleString();

        document.getElementById("views").innerHTML =
            Number(c.statistics.viewCount).toLocaleString();

        document.getElementById("videos").innerHTML =
            Number(c.statistics.videoCount).toLocaleString();

    } catch (err) {
        console.error(err);
    }
}

loadChannel();

setInterval(loadChannel,10000);
