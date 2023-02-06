import { getLocalOne } from './add-local';
import { toWatched } from './add-to-watched';
import { toQueue } from './add-to-queue';


const backdrop = document.querySelector('.backdrop')
const modalMovie = document.querySelector('.modal_img')


backdrop.addEventListener('click', onClick)

function onClick(e) {
  const id = +e.target.dataset.id;

  const btn = {
    btn_watched: document.querySelector('.btn_watched'),
    btn_queue: document.querySelector('.btn_queue')
}

    if(e.target.classList.contains('btn_watched')){

        if(toQueue.getQueueAll() !== undefined && toQueue.getQueueOne(id).length > 0){
            toQueue.removeQueueOneEl(id)
            btn.btn_queue.classList.remove('js-queue')
            btn.btn_queue.textContent = 'add to queue';
        }

        if(!toWatched.getWatchedOne(id)|| toWatched.getWatchedOne(id).length < 1){
            toWatched.setWatchedOne(...getLocalOne(id))
            btn.btn_watched.classList.add('js-watched')
            btn.btn_watched.textContent = 'reviewed';
            return 
        }
    }

    if(e.target.classList.contains('btn_queue')){

        if(toWatched.getWatchedAll !== undefined && toWatched.getWatchedOne(id).length > 0){
            toWatched.removeWatchedOneEl(id)
            btn.btn_watched.classList.remove('js-watched')
            btn.btn_watched.textContent = 'add to watched';
        }

        if(!toQueue.getQueueOne(id) || toQueue.getQueueOne(id).length < 1){
            toQueue.setQueueOne(...getLocalOne(id))
            btn.btn_queue.classList.add('js-queue')
            btn.btn_queue.textContent = 'in your turn';
            return 
        }
    }
    
}







export function watchedCurrent(id){
    const btn = {
        btn_watched: document.querySelector('.btn_watched'),
        btn_queue: document.querySelector('.btn_queue')
    }
    if(toWatched.getWatchedOne(id) || toQueue.getQueueOne(id)){

        if(toWatched.getWatchedOne(id).length > 0){
            btn.btn_watched.classList.add('js-watched')
            btn.btn_watched.textContent = 'reviewed';
        }
    }

    if(toQueue.getQueueOne(id)){
        if(toQueue.getQueueOne(id).length > 0){
            btn.btn_queue.classList.add('js-queue')
            btn.btn_queue.textContent = 'in your turn';
        }
    }

}
