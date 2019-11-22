const tools = {
    fillBucket: false,
    chooseColor: false,
    pencil: true,
};

function toggleActiveClass() {
    const toolsButtons = document.querySelectorAll('.tools--buttons-elem');
    toolsButtons.forEach((elem) => {
        elem.classList.remove('active');
        tools.fillBucket && elem.classList.contains('fillBucket') && elem.classList.add('active');
        tools.chooseColor && elem.classList.contains('chooseColor') && elem.classList.add('active');
        tools.pencil && elem.classList.contains('pencil') && elem.classList.add('active');
    });
}

export {toggleActiveClass, tools};