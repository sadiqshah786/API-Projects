let jokeTitle = document.querySelector('.card-text');
let cat = document.querySelector('.cat');
let btn = document.querySelector('.btn');


btn.addEventListener("click",async ()=>{
    btn.classList.add("Loading")
    btn.innerHTML = "Loading Joke..."
    await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,political,racist,sexist,explicit')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
        if(data.joke){
            jokeTitle.innerHTML = `${data.joke}`
            cat.innerHTML =  `━ ${data.category}`
            btn.classList.remove("Loading")
            btn.innerHTML = "Next Joke"
        }
        else{
            jokeTitle.innerHTML = `${data.setup}`
            cat.innerHTML =  `━ ${data.category}`
            btn.classList.remove("Loading")
            btn.innerHTML = "Next Joke"
        }
    })
    .catch((error)=>{
        jokeTitle.innerHTML =  error
    })
})
