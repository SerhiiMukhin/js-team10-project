import {toQueue} from './add-to-queue'
import {toWatched} from './add-to-watched'
import card from "../templates/card_film.hbs"
// import {addLocal, getLocalOne} from './add-local'

const list = document.querySelector('.library-section__card-set')
const btnWatch = document.querySelector('.js-watch')
const btnQueue = document.querySelector('.js-queue')

btnWatch.addEventListener('click', onWatch)
btnQueue.addEventListener('click', onQueue)

function start(){
    btnQueue.focus()
    onQueue()
}

start()

function onQueue() {
    const data = toQueue.getQueueAll()

   renderCard(data)

   if(!btnQueue.classList.contains('current')){
    btnQueue.classList.add('current')
    btnWatch.classList.remove('current')
    return
   }
   btnQueue.classList.remove('current')
}

function onWatch() {
    const data = toWatched.getWatchedAll()
    
    renderCard(data)

    if(!btnWatch.classList.contains('current')){
        btnWatch.classList.add('current')
    btnQueue.classList.remove('current')
        return
    }
    btnWatch.classList.remove('current')

}

function renderCard(arr){
    try{
    if(arr.length > 0){
        list.innerHTML = card(arr)
    }
}catch{
    return list.innerHTML ="🐷"
}
}