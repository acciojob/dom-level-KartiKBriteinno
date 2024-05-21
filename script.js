//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    function getDomLevel(element) {
        let level = 0;
        while (element) {
            level++;
            element = element.parentElement;
        }
        return level;
    }

    const element = document.getElementById("level");
    const level = getDomLevel(element);
    alert(`The level of the element is: ${level}`);
});
