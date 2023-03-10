import IsElementInViewport from "./IsElementInViewport";

function FadeListener() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
        // Disables fade-in when we either are seeing the element, or if we have a mobile user on Chrome
        if (IsElementInViewport(el)) {
            el.classList.add('fade-in-active');
        } else {
            el.classList.remove('fade-in-active');
        }
    });
}

export default FadeListener;