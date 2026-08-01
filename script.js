const API_KEY = "AIzaSyAoC10UTsVyMCq4x57ICfYV_WLeKEx0yrg";
const CHANNEL_ID = "UCLnX7s80sPp3JdArqyhh3DQ";

async function loadChannel(){

const url=`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res=await fetch(url);

const data=await res.json();

const channel=data.items[0];

document.getElementById("avatar").src=channel.snippet.thumbnails.high.url;

document.getElementById("name").innerHTML=channel.snippet.title;

document.getElementById("subs").innerHTML=Number(channel.statistics.subscriberCount).toLocaleString();

document.getElementById("views").innerHTML=Number(channel.statistics.viewCount).toLocaleString();

document.getElementById("videos").innerHTML=Number(channel.statistics.videoCount).toLocaleString();

}

loadChannel();

setInterval(loadChannel,10000);
