function mediasEvent(event) {
    if (event.target?.dataset?.mediaType) {
        switch (event.type) {
            case "mouseover":
            case "focusin":
                event.target.style.backgroundImage = ` url(/icons/${event.target.dataset.mediaType}--hover.svg)`;
                break;
            case "mouseout":
            case "focusout":
                event.target.style.backgroundImage = ``;
                break;
            case "click":
                event.target.style.backgroundImage = `url(/icons/${event.target.dataset.mediaType}--activated.svg)`;
                let timer = setTimeout(() => {
                    event.target.style.backgroundImage = ``;
                }, 250);
        }
    }
}

let medias = document.querySelectorAll(".media").forEach((item) => {
    item.addEventListener("focusin", mediasEvent);
    item.addEventListener("focusout", mediasEvent);
    item.addEventListener("mouseover", mediasEvent);
    item.addEventListener("mouseout", mediasEvent);
    item.addEventListener("click", mediasEvent);
});

function searchBlocsEvent(event) {
    let mark = event.target.closest(".search-block").lastElementChild;
    switch (event.type) {
        case "mouseover":
            mark.style.backgroundImage = `url(/icons/loop--hover.svg)`;
            break;
        case "focusin":
            mark.style.backgroundImage = `url(/icons/loop--activated.svg)`;
            break;
        case "mouseout":
            if (
                mark.style.backgroundImage ==
                `url("/icons/loop--activated.svg")`
            ) {
                break;
            }
        case "focusout":
            mark.style.backgroundImage = ``;
            break;
    }
}

let searchBlocks = document
    .querySelectorAll(".search-block")
    .forEach((item) => {
        item.addEventListener("focusin", searchBlocsEvent);
        item.addEventListener("focusout", searchBlocsEvent);
        item.addEventListener("mouseover", searchBlocsEvent);
        item.addEventListener("mouseout", searchBlocsEvent);
        item.addEventListener("click", searchBlocsEvent);
        item.addEventListener("click", mediasEvent);
    });

function burgerMenu() {
    let menu = document.querySelector(".burger-menu");
    menu.focus();
}

let burger = document.querySelector(".burger-button");
burger.addEventListener("click", burgerMenu);

let oldWindowWidth;
let checker = setInterval(() => {
    let newWindowWidth = document.documentElement.clientWidth;
    if (oldWindowWidth != newWindowWidth) {
        oldWindowWidth = newWindowWidth;
        let logo1 = document.querySelector("#logo-mobile");
        let logo2 = document.querySelector("#footer__logo-mobile");
        if (newWindowWidth <= 376) {
            logo1.src = "icons/logotypes/logo_size3.svg";
            logo2.src = "icons/logotypes/logo_size3.svg";
        } else {
            logo1.src = "icons/logotypes/logo_size2.svg";
            logo2.src = "icons/logotypes/logo-slogan_size1.svg";
        }
    }
}, 1000);

function protocolsMenuEvent(event) {
    if (event.target.closest("button")) {
        let target = event.target.closest("button");
        let img = event.target.lastElementChild;
        let info = document.querySelectorAll(
            `[data-couple="${target.dataset.couple}"]`
        )[1];
        if (oldWindowWidth <= 376) {
            switch (event.type) {
                case "focusin":
                    img.src = `icons/arrow-active.svg`;
                    img.style.transform = "rotate(0deg)";
                    info.style.display = "block";
                    target.after(info);
                    break;
                case "focusout":
                    img.src = "icons/arrow-inactive.svg";
                    img.style.transform = "rotate(90deg)";
                    info.style.display = "none";
                    break;
            }
        } else {
            switch (event.type) {
                case "focusin":
                    img.src = `icons/arrow-active.svg`;
                    info.style.display = "block";
                    break;
                case "focusout":
                    img.src = "icons/arrow-inactive.svg";
                    info.style.display = "none";
                    break;
            }
        }
    }
}
let protocolsMenu = document.querySelector(".protocols");
protocolsMenu.addEventListener("focusin", protocolsMenuEvent);
protocolsMenu.addEventListener("focusout", protocolsMenuEvent);
