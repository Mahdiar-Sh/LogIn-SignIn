let x = document.getElementById("form1");
let z = document.getElementById("fg");
let y = document.getElementById("form2");
let change = document.getElementById("btn");
let email = document.getElementById("email");
let password = document.getElementById("password");
let setemail = document.getElementById("setEmail");
let createPassword = document.getElementById("setPassword");
let confirmPassword = document.getElementById("confirmPassword");
let show = document.getElementById("show");
let show2 = document.getElementById("show2");
let frame = 0;
let dr = 0;
let dd = 0;
let bott = 22;
let myEmail = document.getElementById("myinput1");
let myPassword = document.getElementById("myinput2");
let myLog = document.getElementById("log");
let mySign = document.getElementById("sgn");
let r = 0;
let ss = 0;
myLog.addEventListener("click", () => {
  q = myEmail.value;
  w = myPassword.value;
  if (q.length < 5 || w.length < 10) {
    swal({
      title: "ایمیل یا پسورد وارد شده اشتباه است",
      icon: "error",
    });
  } else {
    swal({
      title: "وارد شدید ، لطفا صبر کنید...",
      icon: "success",
      button: {
        text: "در حال وارد شدن ...",
      },
    });
    let sw = document.querySelector(".swal-button");
    intervalID = setInterval(() => {
        ss++;
        sw.innerHTML = `درحال وارد شدن ... ${ss}`;
        if (ss >= 4) {
          clearInterval(intervalID);
          ss = 0;
          sw.innerHTML = "با موفقیت وارد شدید ✔"
        }
    }, 1000);
  }
});
show.addEventListener("touchstart", () => {
  document.getElementById("myinput2").setAttribute("type", "text");
  show.addEventListener("touchend", () => {
    document.getElementById("myinput2").setAttribute("type", "password");
  });
});
show2.addEventListener("touchstart", () => {
  document.getElementById("myinput4").setAttribute("type", "text");
  show2.addEventListener("touchend", () => {
    document.getElementById("myinput4").setAttribute("type", "password");
  });
});

show.addEventListener("mousedown", () => {
  document.getElementById("myinput2").setAttribute("type", "text");
  show.addEventListener("mouseup", () => {
    document.getElementById("myinput2").setAttribute("type", "password");
  });
});
show2.addEventListener("mousedown", () => {
  document.getElementById("myinput4").setAttribute("type", "text");
  show2.addEventListener("mouseup", () => {
    document.getElementById("myinput4").setAttribute("type", "password");
  });
});

if (screen.orientation.type == "portrait-primary")
  document.getElementById("lgi").style.color = "white";
else document.getElementById("lgi").style.color = "black";
change.addEventListener("click", () => {
  if (dr == 0) {
    animateLogin();
    document.getElementById("lgi").style.color = "rgb(153 , 163 , 175)";
    if (screen.orientation.type == "portrait-primary")
      document.getElementById("su").style.color = "white";
    else document.getElementById("su").style.color = "black";
    document.getElementById("myinput1").value = "";
    document.getElementById("myinput2").value = "";
  } else if (dr == 180) {
    animateSignup();
    document.getElementById("su").style.color = "rgb(153 , 163 , 175)";
    if (screen.orientation.type == "portrait-primary")
      document.getElementById("lgi").style.color = "white";
    else document.getElementById("lgi").style.color = "black";
    document.getElementById("myinput3").value = "";
    document.getElementById("myinput4").value = "";
    document.getElementById("myinput5").value = "";
  }
});
function animateLogin() {
  updateLogin();
  frame++;
  if (dr == 92) {
    email.style.bottom = "22px";
    password.style.bottom = "22px";
    x.style.display = "none";
    y.style.display = "block";
    y.style.transform = "rotateY(-180deg)";
  }
  if (dr == 180) {
    return;
  }
  requestAnimationFrame(animateLogin);
}
function updateLogin() {
  if (frame % 1 == 0) {
    dr += 4;
    dd += 2;
    z.style.transform = `rotate3d(0, 1, 0, ${dr}deg)`;
    change.style.transform = `rotate(${dd}deg)`;
  }
}
function animateSignup() {
  updateSignup();
  frame++;
  if (dr == 92) {
    y.style.display = "none";
    x.style.display = "block";
  }
  if (dr == 0) {
    return;
  }
  requestAnimationFrame(animateSignup);
}
function updateSignup() {
  if (frame % 1 == 0) {
    dr -= 4;
    dd -= 2;
    z.style.transform = `rotate3d(0, 1, 0, ${dr}deg)`;
    change.style.transform = `rotate(${dd}deg)`;
  }
}
document.addEventListener("click", () => {
  if (document.getElementById("myinput1").value != "") {
    email.style.bottom = "57px";
  } else email.style.bottom = "22px";
  if (document.getElementById("myinput2").value != "") {
    password.style.bottom = "57px";
  } else password.style.bottom = "22px";
  if (document.getElementById("myinput3").value != "") {
    setemail.style.bottom = "57px";
  } else setemail.style.bottom = "22px";
  if (document.getElementById("myinput4").value != "") {
    createPassword.style.bottom = "57px";
  } else createPassword.style.bottom = "22px";
  if (document.getElementById("myinput5").value != "") {
    confirmPassword.style.bottom = "57px";
  } else confirmPassword.style.bottom = "22px";
});

document.getElementById("myinput1").addEventListener("click", () => {
  animate3();
});
document.getElementById("myinput2").addEventListener("click", () => {
  animate4();
});
document.getElementById("myinput3").addEventListener("click", () => {
  animate5();
});
document.getElementById("myinput4").addEventListener("click", () => {
  animate6();
});
document.getElementById("myinput5").addEventListener("click", () => {
  animate7();
});

function animate3() {
  update3();
  frame++;
  if (bott == 57) {
    bott = 22;
    return;
  }
  requestAnimationFrame(animate3);
}
function update3() {
  if (frame % 1 == 0) {
    bott += 1;
    email.style.bottom = `${bott}px`;
  }
}
function animate4() {
  update4();
  frame++;
  if (bott == 57) {
    bott = 22;
    return;
  }
  requestAnimationFrame(animate4);
}
function update4() {
  if (frame % 1 == 0) {
    bott += 1;
    password.style.bottom = `${bott}px`;
  }
}
function animate5() {
  update5();
  frame++;
  if (bott == 57) {
    bott = 22;
    return;
  }
  requestAnimationFrame(animate5);
}
function update5() {
  if (frame % 1 == 0) {
    bott += 1;
    setemail.style.bottom = `${bott}px`;
  }
}
function animate6() {
  update6();
  frame++;
  if (bott == 57) {
    bott = 22;
    return;
  }
  requestAnimationFrame(animate6);
}
function update6() {
  if (frame % 1 == 0) {
    bott += 1;
    createPassword.style.bottom = `${bott}px`;
  }
}
function animate7() {
  update7();
  frame++;
  if (bott == 57) {
    bott = 22;
    return;
  }
  requestAnimationFrame(animate7);
}
function update7() {
  if (frame % 1 == 0) {
    bott += 1;
    confirmPassword.style.bottom = `${bott}px`;
  }
}
