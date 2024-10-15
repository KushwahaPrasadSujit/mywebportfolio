const sections = document.querySelectorAll(".section");
function checkSectionInView() {
    let isInView = false;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            console.log('Section ' + section.id + ' is in view');
            isInView = true;
        }
    });

    if (!isInView) {
    }
}

window.addEventListener('scroll', checkSectionInView);
checkSectionInView();