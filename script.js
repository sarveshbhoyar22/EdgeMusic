console.log("Hello world, Welcome to Edge");

let songindex=0;
let audioelement= new Audio('songs/1.mp3');
let audioelement2= new Audio('songs/Ghungroo.mp3');
let audioelement3= new Audio('songs/GullyBoy.mp3');
let audioelement4= new Audio('songs/Rabba.mp3');
let audioelement5= new Audio('songs/Rozana.mp3');
let audioelement6= new Audio('songs/sau assaman.mp3');
let audioelement7= new Audio('songs/shaabashiya.mp3');


let masterplay= document.getElementById('masterplay');
let play1= document.getElementById('play1');
let play2= document.getElementById('play2');
let play3= document.getElementById('play3');
let play4= document.getElementById('play4');
let play5= document.getElementById('play5');
let play6= document.getElementById('play6');
let play7= document.getElementById('play7');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
// let songiteam = Array.from(document.getElementsByClassName(songlistcontainer));

let songs=[

    {songname:"Love you zindagi",filepath:"songs/1.mp3"},
    {songname:"Ghungroo",filepath:"songs/Ghungroo.mp3"},
    {songname:"GullyBoy_ApnaTime",filepath:"songs/GullyBoy.mp3"},
    {songname:"Rabba",filepath:"songs/Rabba.mp3"},
    {songname:"Rozana",filepath:"songs/Rozana.mp3"},
    {songname:"Sau_Assanam",filepath:"songs/sau assaman.mp3"},
    {songname:"Shaabashiyan",filepath:"songs/shaabashiya.mp3"},


]
// songiteam.forEach((element,i) => {
//     console.log(element,i);
//     element.getElementByTagName("img")[0].src=songs[i].filepath;
// });


    



play1.addEventListener ('click', ()=> {

    if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    play1.classList.remove('fa-circle-play');
    play1.classList.add('fa-circle-pause');
    
    gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        play1.classList.remove('fa-circle-pause');
        play1.classList.add('fa-circle-play');
        gif.style.opacity=0;}
        
    })



    play2.addEventListener ('click', ()=> {

        if(audioelement2.paused || audioelement2.currentTime<=0){
        audioelement2.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        play2.classList.remove('fa-circle-play');
        play2.classList.add('fa-circle-pause');
        
        gif.style.opacity=1;
        }
        else{
            audioelement2.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            play2.classList.remove('fa-circle-pause');
            play2.classList.add('fa-circle-play');
            gif.style.opacity=0;}
            
        })



        play3.addEventListener ('click', ()=> {

            if(audioelement3.paused || audioelement3.currentTime<=0){
            audioelement3.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            play3.classList.remove('fa-circle-play');
            play3.classList.add('fa-circle-pause');
            
            gif.style.opacity=1;
            }
            else{
                audioelement3.pause();
                masterplay.classList.remove('fa-circle-pause');
                masterplay.classList.add('fa-circle-play');
                play3.classList.remove('fa-circle-pause');
                play3.classList.add('fa-circle-play');
                gif.style.opacity=0;}
                
            })




            play4.addEventListener ('click', ()=> {

                if(audioelement4.paused || audioelement4.currentTime<=0){
                audioelement4.play();
                masterplay.classList.remove('fa-circle-play');
                masterplay.classList.add('fa-circle-pause');
                play4.classList.remove('fa-circle-play');
                play4.classList.add('fa-circle-pause');
                
                gif.style.opacity=1;
                }
                else{
                    audioelement4.pause();
                    masterplay.classList.remove('fa-circle-pause');
                    masterplay.classList.add('fa-circle-play');
                    play4.classList.remove('fa-circle-pause');
                    play4.classList.add('fa-circle-play');
                    gif.style.opacity=0;}
                    
                })
    

                play5.addEventListener ('click', ()=> {

                    if(audioelement5.paused || audioelement5.currentTime<=0){
                    audioelement5.play();
                    masterplay.classList.remove('fa-circle-play');
                    masterplay.classList.add('fa-circle-pause');
                    play5.classList.remove('fa-circle-play');
                    play5.classList.add('fa-circle-pause');
                    
                    gif.style.opacity=1;
                    }
                    else{
                        audioelement5.pause();
                        masterplay.classList.remove('fa-circle-pause');
                        masterplay.classList.add('fa-circle-play');
                        play5.classList.remove('fa-circle-pause');
                        play5.classList.add('fa-circle-play');
                        gif.style.opacity=0;}
                        
                    })


                    play6.addEventListener ('click', ()=> {

                        if(audioelement6.paused || audioelement6.currentTime<=0){
                        audioelement6.play();
                        masterplay.classList.remove('fa-circle-play');
                        masterplay.classList.add('fa-circle-pause');
                        play6.classList.remove('fa-circle-play');
                        play6.classList.add('fa-circle-pause');
                        
                        gif.style.opacity=1;
                        }
                        else{
                            audioelement6.pause();
                            masterplay.classList.remove('fa-circle-pause');
                            masterplay.classList.add('fa-circle-play');
                            play6.classList.remove('fa-circle-pause');
                            play6.classList.add('fa-circle-play');
                            gif.style.opacity=0;}
                            
                        })

                        play7.addEventListener ('click', ()=> {

                            if(audioelement7.paused || audioelement7.currentTime<=0){
                            audioelement7.play();
                            masterplay.classList.remove('fa-circle-play');
                            masterplay.classList.add('fa-circle-pause');
                            play7.classList.remove('fa-circle-play');
                            play7.classList.add('fa-circle-pause');
                            
                            gif.style.opacity=1;
                            }
                            else{
                                audioelement7.pause();
                                masterplay.classList.remove('fa-circle-pause');
                                masterplay.classList.add('fa-circle-play');
                                play7.classList.remove('fa-circle-pause');
                                play7.classList.add('fa-circle-play');
                                gif.style.opacity=0;}
                                
                            })
                
            
        
    //---------------------------------------------------

    //    masterplay.addEventListener ('click', ()=> {

    //     if(audioelement.paused || audioelement.currentTime<=0){
    //     audioelement.play();
    //     masterplay.classList.remove('fa-circle-play');
    //     masterplay.classList.add('fa-circle-pause');
    //     gif.style.opacity=0;
    //     }
    //     else{
    //         audioelement.pause();
    //         masterplay.classList.remove('fa-circle-pause');
    //         masterplay.classList.add('fa-circle-play');
    //         gif.style.opacity=1;}
            
    //     })
    
        // masterplay.classList.remove('fa-circle-play');
        // masterplay.classList.add('fa-circle-pause');
        // gif.style.opacity=0;
        // }
        // else{
        //     audioelement.pause();
        //     masterplay.classList.remove('fa-circle-pause');
        //     masterplay.classList.add('fa-circle-play');}
        //     gif.style.opacity=1;


            
        // })







    //-----------------------------------------------
    audioelement.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        console.log(progress);
        myprogressbar.value=progress;


     })

     myprogressbar.addEventListener('change',()=>{
        audioelement.currentTime= myprogressbar.value*audioelement.duration/100
     } )
    
    

    

    


    

