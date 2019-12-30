import {tools} from "../configuration";

function toggleActiveClass() {
  const toolsButtons = document.querySelectorAll('.tools');
  toolsButtons.forEach((elem) => {
    elem.classList.remove('active_element');
    tools.fillBucket && elem.classList.contains('main--tools-paint_bucket') && elem.classList.add('active_element');
    tools.stroke && elem.classList.contains('main--tools-stroke') && elem.classList.add('active_element');
    tools.pencil && elem.classList.contains('main--tools-pen') && elem.classList.add('active_element');
    tools.eraser && elem.classList.contains('main--tools-eraser') && elem.classList.add('active_element');
  });
}

export default toggleActiveClass;
