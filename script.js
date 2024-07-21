const arr = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const delay = () => {
    return Math.floor((Math.random() * 6) + 1) * 1000;
}

async function blip(array,i) {
    for (let index = 0; index < 3; index++) {
        await new Promise(resolve => {
            setTimeout(()=>{document.body.children[i].innerText  += "."
                            resolve()
            }, 1000)
        });
    }
}

async function display(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(index)
        if (index < arr.length) {
            const newdiv = document.createElement("div");
            document.body.lastElementChild.before(newdiv);
            newdiv.innerText = arr[index];
            blip(arr,index)
            await new Promise(resolve => {
                setTimeout(resolve, delay())
            });
        }
        console.log("text finished")
    }
}

display(arr);
