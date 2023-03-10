// These functions are for scrolling to each section without changing the URL with an /#{sectionID}
function ScrollTo(e, sectionName){
    e.preventDefault();
    const section = document.getElementById(sectionName); // Get the section element by ID
    window.scrollTo({
        top: section.offsetTop - (sectionName === "nameC" ? 0 : 75), // Scroll to the section's offset top
        behavior: "smooth" // Add smooth scrolling behavior
    });
}

export default ScrollTo;