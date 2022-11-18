const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const input = document.getElementById('input');

const baseUrl = 'http://localhost:8383/'

getBtn.addEventListener('click', getInfo);
postBtn.addEventListener('click', postInfo);
async function getInfo(e) {
    console.log('get button works')
    e.preventDefault();
    const res = await fetch(baseUrl + 'info/luka?key=hello', {
        method: 'GET'
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    input.value = data.info;
    console.log(input.value+ "  yep");
}
async function postInfo(e) {
    console.log("post button works")
    e.preventDefault();
    console.log(input.value);
    if (!input.value) {
        console.log("input doesnt exist")
        return 
    }
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            parcel: input.value
        })
    });
}