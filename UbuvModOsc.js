// Colores
const BACKGROUND_PRIMARY = "#1A1A1A";
const BACKGROUND_SECONDARY = "#262626";
const ACCENT = "#333333";
const CARD = "#262626";
const NAV = "#262626";
const NAV_ITEM = "#333333";
const NAV_BUTTON = "#333333";
const TEXT_PRIMARY = "#808080";
const TEXT_SECONDARY = "#666666";
const CALENDAR_NORMAL = "#262626";
const CALENDAR_EVENT = "#333333";
const BOX_BORDER = "#1A1A1A";


document.body.style.backgroundColor = BACKGROUND_PRIMARY;
document.body.style.color = TEXT_PRIMARY;
document.body.style.border = BOX_BORDER;

// Main body
for (i of document.getElementsByClassName("mb-3")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
}

// Main section
document.getElementById("region-main").style.backgroundColor = BACKGROUND_SECONDARY;

// Cards
for (i of document.getElementsByClassName("card")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
}

// Header
for (i of document.getElementsByClassName("page-header")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
}

// Nav
document.getElementById("nav-drawer").style.backgroundColor = NAV;

// Items del Nav
for (i of document.getElementsByClassName("list-group-item")){
    i.style.backgroundColor = NAV_ITEM;
}

// Texto de los items del Nav
for (i of document.getElementsByClassName("media")){
    i.style.color = TEXT_PRIMARY;
}

// Texto con links
for (i of document.getElementsByClassName("aalink")){
    i.style.color = TEXT_SECONDARY;
}

// TExto con links en las cards
for (i of document.getElementsByTagName("a")){
    i.style.color = TEXT_SECONDARY;
}

// Bordes de las cajas
for (i of document.getElementsByClassName("border")){
    i.setAttribute('style', 'border: 1px solid ' + BOX_BORDER + ' !important');
}

for (i of document.getElementsByClassName("bg-white")){
    i.setAttribute('style', 'background-color: ' + BACKGROUND_SECONDARY + ' !important');
}

for (i of document.getElementsByClassName("icon")){
    i.style.color = TEXT_PRIMARY;
}

for (i of document.getElementsByClassName("bg-gray")){
    i.setAttribute('style', 'background-color: ' + NAV_BUTTON + ' !important');
}

for (i of document.getElementsByClassName("btn-light")){
    i.style.borderColor = BACKGROUND_SECONDARY;
}

for (i of document.getElementsByClassName("active")){
    i.style.borderColor = BOX_BORDER;
}

for (i of document.getElementsByTagName("th")){
    i.setAttribute('style', 'border: 1px solid ' + BOX_BORDER);
}

for (i of document.getElementsByTagName("tr")){
    i.setAttribute('style', 'color: ' + TEXT_PRIMARY);
}

for (i of document.getElementsByTagName("td")){
    i.setAttribute('style', 'border-top: 1px solid ' + BOX_BORDER);
}

for (i of document.getElementsByClassName("main")){
    i.setAttribute('style', 'border: 1px solid ' + BOX_BORDER);
}

for (i of document.getElementsByClassName("cell")){
    i.style.backgroundColor = ACCENT;
}

// Dias del calendario
for (i of document.getElementsByClassName("day")){
    i.style.backgroundColor = CALENDAR_NORMAL;
}

// Dias destacados del calendario
for (i of document.getElementsByClassName("calendar_event_course")){
    i.style.backgroundColor = CALENDAR_EVENT;
}

for (i of document.getElementsByClassName("drawer")){
    i.style.backgroundColor = CALENDAR_EVENT;
}

for (i of document.getElementsByClassName("activity")){
    i.setAttribute('style', 'border-bottom: 1px solid ' + BOX_BORDER);
}

for (i of document.getElementsByTagName("span")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
    i.style.color = TEXT_PRIMARY;
}

for (i of document.getElementsByTagName("p")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
    i.style.color = TEXT_PRIMARY;
}

for (i of document.getElementsByTagName("em")){
    i.style.backgroundColor = BACKGROUND_SECONDARY;
    i.style.color = TEXT_PRIMARY;
}
