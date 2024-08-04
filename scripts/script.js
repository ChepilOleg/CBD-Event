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
