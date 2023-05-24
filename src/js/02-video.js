import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const iframePlayer = new Player(iframe, {});
iframePlayer.setCurrentTime(localStorage.getItem(currentTime));
iframePlayer.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(currentTime, e.seconds);
  }, 1000)
);
