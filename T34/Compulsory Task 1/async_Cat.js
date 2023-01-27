/*Program to fetch api using async/await */

async function apiFunction() {
    let cat_url = await fetch("https://cdn2.thecatapi.com/images/3ln.gif");
    let img_url = cat_url.url;
    console.log(img_url);
}

apiFunction();
