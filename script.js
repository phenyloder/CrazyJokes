const jokes = document.getElementById("joke-box");
const jokeBtn = document.getElementById("btn");

// const getJoke = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     };

//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res)=>res.json()).then((data)=>jokes.innerHTML=data.joke).catch((error)=>console.log(error));
// };

const getJoke = async () => {
    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        };
    
       const res = await fetch('https://icanhazdadjoke.com/', setHeader);
       const data = await res.json();
       jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`The Error Is ${error}`);
    }
};

jokeBtn.addEventListener("click", getJoke);
getJoke();