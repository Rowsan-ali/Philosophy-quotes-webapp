let p = fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json();
    })
    .then(data => {
        document.getElementById('quotes-text').innerHTML = data.slip.advice
    })

const button = document.querySelector("button");
button.addEventListener("click", () => {
    location.reload()
})