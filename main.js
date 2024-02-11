const demo = document.getElementById("demo");
const divbanner = document.createElement("div");
const sectionleft = document.createElement("section");
const sectionright = document.createElement("section");
const H1 = document.createElement("h1");
const abot = document.createElement("a");
const lego = document.createElement("img");
const ullist = document.createElement("ul");
const lilist0 = document.createElement("li");
const lilist1 = document.createElement("li");
const lilist2 = document.createElement("li");
const lilist3 = document.createElement("li");
const divnav = document.createElement("div");
const articlenav = document.createElement("article");
///////////////////////////////////////////setAttribute

divbanner.setAttribute("id", "divbanner");
sectionleft.setAttribute("id", "sectionleft");
sectionright.setAttribute("id", "sectionright");
ullist.setAttribute("id", "ullist");
lilist0.setAttribute("class", "lilist");
lilist1.setAttribute("class", "lilist");
lilist2.setAttribute("class", "lilist");
lilist3.setAttribute("class", "lilist");
H1.setAttribute("id", "H1title");
abot.setAttribute("id", "abot");
divnav.setAttribute("id", "divnav");
articlenav.setAttribute("class", "articlenav")
///////////////////////////////////////////start Code
/* بنر سایت */
const img1 = createimg("assets/img/slider-default1.jpg")
const img2 = createimg("assets/img/slider-default2.jpg")
const img3 = createimg("assets/img/slider-default3.jpg")
abot.innerHTML = "READ MORE"
demo.append(img1, img2, img3, H1, abot)
let slideIndex = 0;
carousel();

lego.src = "assets/img/logo.png";
sectionleft.append(lego);
lilist0.innerHTML = "GALLERY";
lilist1.innerHTML = "TEMPLATE";
lilist2.innerHTML = "ABOUT";
lilist3.innerHTML = "CONTACT";
ullist.append(lilist0, lilist1, lilist2, lilist3)
sectionright.append(ullist)
divbanner.append(sectionleft, sectionright)
demo.append(divbanner)

/*لیست منو ها خواهد بود */
for (let i = 0; i < 4; i++) {

}
demo.append(divnav)

///////////////////////////////////////////////function

function createimg(str) {
    const img = document.createElement("img");
    img.setAttribute("class", "mySlides");
    img.src = str;
    return img;
}

function carousel() {
    let i;
    const title = ["CREATIVE IDEAS FOR <br/> YOUR BODY", "CUSTOM DESIGNS &<br/> THE BEST ARTISTS", "CUSTOM TATTOOING &<br/> EXOTIC PIERCING"]
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    H1.innerHTML = title[slideIndex - 1]
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
