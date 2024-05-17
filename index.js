const genCode = () => {
    let code = "";
    while (code.length < 1000) {
        code = code.concat(Math.floor(Math.random() * 2));
    }
    return code;
}

let check = Array.from(document.getElementsByClassName("check"));

function checkall() {
    if (check[2].checked) {
        check[0].checked = true;
        check[1].checked = true;
    }
}

function hack() {
    let side = Array.from(document.getElementsByClassName("side1"));

    let clear1 = setInterval(() => {
        side[0].innerHTML = genCode();
    }, 300)

    let clear2 = setInterval(() => {
        side[1].innerHTML = genCode();
    }, 250)

    let text = Array.from(document.getElementsByClassName("text"));
    let target = document.getElementById("target").value;


    const hackAPI = async () => {
        {
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = "";
            }
        }

        let step1 = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[1].innerHTML = "Finding user.......";
                reslove(1);
            }, 1000);
        })

        let step2 = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "User Located.......";
                reslove(1);
            }, 1000);
        })


        let step1a = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[2].innerHTML = `username: ${target}`;
                reslove(1);
            }, 1000);
        })

        let step1b = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[2].innerHTML = ` password:XXXXXXX `;
                reslove(1);
            }, 500);
        })

        let step1c = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "number:+91XXXXXXXXXX";
                reslove(1);
            }, 800);
        })

        let step3 = await new Promise((reslove, reject) => {
            setTimeout(() => {
                text[3].innerHTML = "getting device info...";
                reslove(1);
            }, 1000);
        })

        if (check[0].checked) {
            let step4 = await new Promise((reslove, reject) => {
                setTimeout(() => {
                    text[4].innerHTML = "Facebook hacked...";
                    reslove(1);
                }, 1000);
            })
        }

        if (check[1].checked) {
            let step5 = await new Promise((reslove, reject) => {
                setTimeout(() => {
                    text[4].innerHTML = "instagram  hacked...";
                    reslove(1);
                }, 1000);
            })
        }

        let step5 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[4].innerHTML = "Reseting passwords...";
                resolve(1);
            }, 1000);
        })


        let step6 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "access granted to phone"
                resolve(1)
            }, 1000)
        })

        let step7 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "Log generated";
                resolve(1)
            }, 1000)
        })

        let step8 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[5].innerHTML = "hacking status: pending..."
                resolve(1)
            }, 1000)
        })

        let step9 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[5].innerHTML = "hacking status: hacked! succesfully -_+"
                resolve(1)
                clearInterval(clear1)
                clearInterval(clear2)
                side.forEach((x) => {
                    x.innerHTML = "Hacker Man"
                })
            }, 3000)
        })
    }

    hackAPI();
}