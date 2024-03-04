var music = [
  {
    name: "Phle bhe mai",
    image:
      "https://duniyakilyrics.com/wp-content/uploads/2023/11/pehle-bhi-main-lyrics-animal-vishal-mishra.webp",
    duration: "4:53",
    url: "./songs/Pehle Bhi Main.mp3",
  },
  {
    name: "Zaruri tha",
    image: "https://i.ytimg.com/vi/laC66vDlIR4/maxresdefault.jpg",
    duration: "3:53",
    url:"./songs/Zaroori Tha (320 kbps).mp3"
  },
  {
    name: "Arjan vaille",
    image:
      "https://i.ytimg.com/vi/zqGW6x_5N0k/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-ymuZh15mBbf3GHiMrKYyKc-jwg",
    duration: "3:13",
    url: "./songs/Arjan Vailly.mp3",
  },
  {
    name: "Temprary pyar",
    image: "https://m.timesofindia.com/photo/79793417/size-576807/79793417.jpg",
    duration: "4:23",
    url: "./songs/Temporary Pyar.mp3",
  },
  {
    name: "Hua mai",
    image: "https://i.ytimg.com/vi/M-U-XavSH_8/sddefault.jpg",
    duration: "3:33",
    url: "./songs/Hua Main.mp3",
  },
  {
    name: "Hua mai",
    image: "https://i.ytimg.com/vi/M-U-XavSH_8/sddefault.jpg",
    duration: "3:33",
    url: "./songs/Hua Main.mp3",
  },
];

var cluster = "";
var queue = document.querySelector("#queue");
var photo = document.querySelector("#photo");
var audio = new Audio();

music.forEach(function (elem, index) {
  cluster += `<div class="card" id="${index}">
    <img
      src="${elem.image}"
      alt=""
    />
    <h3>${elem.name}</h3>
    <h3>Duration ${elem.duration}</h3>
  </div>`;
});

queue.innerHTML = cluster;

queue.addEventListener("click", function (elem) {
  photo.style.backgroundImage = `url('${music[elem.target.id].image}')`;
  console.log(music[elem.target.id].url)
  audio.src=music[elem.target.id].url;;
  audio.play()
});

var play = document.querySelector("#play");

var flag=0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-circle-line"></i>`;
        audio.play()
        flag==1;
            
            
    }
    else{
            
        play.innerHTML=` <i class="ri-play-fill"></i> `;
        audio.pause()
        flag==0;
    }
    })
    





