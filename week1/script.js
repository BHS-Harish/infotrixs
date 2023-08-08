document.getElementById('menu-button').addEventListener('click', function () {
    document.getElementById('collapse-menu').style.display = "flex";
})
function enroll(value) {
    var course = ""
    switch (value) {
        case 0:
            course = "ReactJs"
            break
        case 1:
            course = "Javascript"
            break
        case 2:
            course = "Python"
            break
        case 3:
            course = "Angular"
            break
        case 4:
            course = "Swift"
            break
    }
    alert("You are enrolled in "+course+" course successfully")
}