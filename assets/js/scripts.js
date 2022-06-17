window.addEventListener('load',()=>{
    const audio  = new Audio('assets/media/path-to-glory.mp3')
    audio.addEventListener('ended',(e)=>{
        e.target.play()
    })

    audio.volume = 0.5

    const audioButton = document.querySelector('.icon-volume-off')
    audioButton.addEventListener('click',function(e){
        const audBtn = e.target

        if(audio.paused || audio.muted ){
            audio.muted = false
            audio.play()
            e.target.className = 'icon-volume-up'
        }else{
            audio.muted = true
            e.target.className = 'icon-volume-off'
        }
   },false)
})