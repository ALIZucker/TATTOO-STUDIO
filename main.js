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
const divpost = document.createElement("div");
const aboutdiv = document.createElement("div");
const abosectionleft = document.createElement("section");
const abosectionright = document.createElement("section");
const aboutimg = document.createElement("img");
const abouth2 = document.createElement("h2");
const aboutp = document.createElement("p");
const aboutbot = document.createElement("a");
const ostaddiv = document.createElement("div");
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
divpost.setAttribute("id", "divpost");
aboutdiv.setAttribute("id", "aboutdiv");
abosectionleft.setAttribute("id", "abosectionleft");
abosectionright.setAttribute("id", "abosectionright");
aboutimg.setAttribute("id", "aboutimg");
abouth2.setAttribute("id", "abouth2");
aboutp.setAttribute("id", "aboutp");
aboutbot.setAttribute("id", "aboutbot");
ostaddiv.setAttribute("id", "ostaddiv");
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
const navtitle = ["TATTOOS &  <br/> COVER-UPS", "PIERCING &  <br/> JEWELLERY", "CUSTOM TATTOO  <br/> DESIGNS", "PORTRAITS  <br/> PAINTINGS"];
const navpic = ["assets/img/logo.webp", "assets/img/about_image2.png", "assets/img/about_image3.png", "assets/img/about_image4.png"];

for (let i = 0; i < 4; i++) {

    divnav.append(createnav(navpic[i], navtitle[i]))
}

demo.append(divnav);

/*لیست پست هااا */
const postimg = [
    {
        src: "assets/img/s1.jpg",
        title: "GOTHIC TATTOO",
        desc: "Sed eu justo sit amet metustin laoreet accum<br/> sanis asceyian ayli quam, umsausce"
    }, {
        src: "assets/img/s2.jpg",
        title: "SIMPLE SHAPES",
        desc: "Sed eu justo sit amet metustin laoreet accum <br/>sanis asceyian ayli quam, umsausce"
    }, {
        src: "assets/img/s3.jpg",
        title: "FANTASY TATTOO",
        desc: "Sed eu justo sit amet metustin laoreet accum<br/> sanis asceyian ayli quam, umsausce"
    }, {
        src: "assets/img/s4.jpg",
        title: "JAPANESE TATTOO",
        desc: "Sed eu justo sit amet metustin laoreet accum<br/> sanis asceyian ayli quam, umsausce"
    }, {
        src: "assets/img/s5.jpg",
        title: "FULL SLEEVE TATTOO",
        desc: "Sed eu justo sit amet metustin laoreet accum <br/>sanis asceyian ayli quam, umsausce"
    }, {
        src: "assets/img/s6.jpg",
        title: "SKIN DEEP",
        desc: "Sed eu justo sit amet metustin laoreet accum<br/> sanis asceyian ayli quam, umsausce"
    }
]
for (let x of postimg) {
    divpost.append(createpost(x.src, x.title, x.desc))
}
demo.append(divpost);

/*درباره سایت تتو*/

aboutimg.src = "assets/img/fashion_image.jpg";
abouth2.innerHTML = "WE ARE THE COOLEST <br/> TATTOO STUDIO"
aboutp.innerHTML = "Sed eu justo sit amet metus laoreet accumsanis asce ayli quam, cc umsausce ayli quam, tellus id inumsau sce asad uam, tellus wcid in aptent taciti sociosqu ad litora torquent per conubia nostra.\n" +
    "\n" +
    " \n" +
    "\n" +
    "Sed eu justo sit amet metus laoreet accumsanis asce ayli quam, cc umsausce ayli quam, tellus id inumsau sce asad uam, tellus wcid in aptent taciti sociosqu ad litora torquent per conubia nostra."
aboutbot.innerHTML = "DISCOVER MORE"
abosectionright.append(abouth2, aboutp, aboutbot)
abosectionleft.append(aboutimg)
aboutdiv.append(abosectionleft, abosectionright)
demo.append(aboutdiv)
/*اسم تتو کار ها*/
const ostad = [{
    src: "assets/img/team_member1.jpg",
    title: "NATHAN WALKER",
    desc: "Tattoo Artist"
}, {
    src: "assets/img/team_member2.jpg",
    title: "JACK LANE",
    desc: "Tattoo Designer"
}, {
    src: "assets/img/team_member3.jpg",
    title: "SHIRLEY JOHNSON",
    desc: "Piercing Designer"
}, {
    src: "assets/img/team_member4.jpg",
    title: "NATHAN WALKER",
    desc: "Henna Designer"
}
]
for (let x of ostad) {
    ostaddiv.append(createostad(x.src, x.title, x.desc))
}
demo.append(ostaddiv)

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

function createnav(strimg, strtitle) {
    const articlenav = document.createElement("article");
    const imgnav = document.createElement("img");
    const h2nav = document.createElement("h2");
    articlenav.setAttribute("class", "articlenav")
    imgnav.setAttribute("class", "imgnav")
    h2nav.setAttribute("class", "h2nav")
    imgnav.src = strimg;
    h2nav.innerHTML = strtitle;
    articlenav.append(imgnav, h2nav);
    return articlenav;
}

function createpost(strimg, strtitle, strp) {
    const articlepost = document.createElement("article");
    const imgpost = document.createElement("img");
    const h3post = document.createElement("h3");
    const ppost = document.createElement("p");

    articlepost.setAttribute("class", "articlepost")
    imgpost.setAttribute("class", "imgpost")
    h3post.setAttribute("class", "h3post")
    ppost.setAttribute("class", "ppost")
    imgpost.src = strimg;
    h3post.innerHTML = strtitle;
    ppost.innerHTML = strp;
    articlepost.append(imgpost, h3post, ppost);
    return articlepost;
}

function createostad(strimg, strtitle, strp) {
    const articleostad = document.createElement("article");
    const imgostad = document.createElement("img");
    const h3ostad = document.createElement("h3");
    const postad = document.createElement("p");

    articleostad.setAttribute("class", "articleostad");
    imgostad.setAttribute("class", "imgostad");
    h3ostad.setAttribute("class", "h3ostad");
    postad.setAttribute("class", "postad");
    imgostad.src = strimg;
    h3ostad.innerHTML = strtitle;
    postad.innerHTML = strp;
    articleostad.append(imgostad, h3ostad, postad);
    return articleostad;
}