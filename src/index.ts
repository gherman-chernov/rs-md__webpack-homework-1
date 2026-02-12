import data from './data';
import '../files/index.css';

const app = document.getElementById('app') as HTMLDivElement;
const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
const slider = document.getElementById('slider') as HTMLInputElement;
const player = new Audio();

let selected: string;
let selectedDiv: HTMLDivElement;

data.forEach((_) => {
  const div = document.createElement('DIV') as HTMLDivElement;
  const img = document.createElement('IMG') as HTMLImageElement;

  img.src = _.img;
  div.appendChild(img);
  div.id = `button-${_.name}`;
  div.style.background = `url('${_.background}') no-repeat 0 0`;
  div.classList.toggle('icon-button');
  div.onclick = function () {
    console.log(`clicked ${JSON.stringify(_)}`);
    selected = _.name;
    body.style.background = `url('${_.background}') no-repeat 0 0`;
    div.classList.toggle('selected');
    div.classList.add('selected');
    if (selectedDiv && selectedDiv != div) selectedDiv.classList.remove('selected');
    
    if (selectedDiv == null || selectedDiv !== div) {
      player.src = _.sound;
      player.volume = +slider?.value;
      player.play();
    } else {
      
      if (player.paused) {
       player.play();
      } else {
        player.pause();
      }
    }
    selectedDiv = div;
  };
  app.append(div);
});

slider.onchange = _ => {
  player.volume = +slider.value;
};