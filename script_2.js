const out_in = document.querySelectorAll(".out, .in");
out_in.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.style.color = 'red';
    });

    elem.addEventListener("mouseout", () => {
        if (!elem.classList.contains('active')) {
            elem.style.color = '';
        }
    });
});

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach(checkbox_elem => {
    checkbox_elem.addEventListener("change", () => {
        const parent = checkbox_elem.parentElement;
        const arrow = checkbox_elem.nextElementSibling.querySelector(".arrow");
        console.log(`.menu-${checkbox_elem.id.slice(9)}`);
        const menu = document.querySelector(`.menu-${checkbox_elem.id.slice(9)}`);
        if (checkbox_elem.checked) {
            parent.classList.add('active');
            if (arrow) {
                arrow.style.transform = "rotate(180deg)";
            }
            if (menu) {
                menu.style.visibility = "visible";
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }
        }
        else {
            parent.classList.remove('active');
            if (arrow) {
                arrow.style.transform = '';
            }
            if (menu) {
                menu.style.visibility = '';
                menu.style.opacity = '';
                menu.style.transform = '';
            }
        }
    });
});

const item = document.querySelectorAll(".item");
item.forEach(item_elem => {
    item_elem.addEventListener("mouseover", () => {
        item_elem.style.backgroundColor = "rgb(215, 215, 215)";
    });

    item_elem.addEventListener("mouseout", () => {
        item_elem.style.backgroundColor = '';
    });
});

const li = document.querySelectorAll("li");
li.forEach(li_elem => {
    const radio_elem = li_elem.querySelector(".elem-radio");
    if (radio_elem.checked) {
        li_elem.style.backgroundColor = "black";
        li_elem.style.color = "white";
    }

    li_elem.addEventListener("mouseover", () => {
        if (!radio_elem.checked) {
            li_elem.style.backgroundColor = "rgb(215, 215, 215)";
        }
    });

    li_elem.addEventListener("mouseout", () => {
        if (!radio_elem.checked) {
            li_elem.style.backgroundColor = '';
        }
    });

    radio_elem.addEventListener("change", () => {
        li.forEach(li_elem_inner => {
            const radio_elem_inner = li_elem_inner.querySelector(".elem-radio");
            if (radio_elem_inner.checked) {
                li_elem_inner.style.backgroundColor = "black";
                li_elem_inner.style.color = "white";
            }
            else {
                li_elem_inner.style.backgroundColor = "";
                li_elem_inner.style.color = "";
            }
        });
    });
});

const container_nav = document.querySelectorAll(".container-nav");
container_nav.forEach(nav_elem => {
    const radio = nav_elem.querySelectorAll(".elem-radio");
    radio.forEach(elem_radio => {
        const elem_radio_id = elem_radio.id;
        const main_obj = nav_elem.nextElementSibling.querySelector(`.main-${elem_radio_id.split('-')[1]}`);
        if (main_obj) {
            if (!elem_radio.checked) {
                main_obj.style.display = "none";
            }
            else {
                main_obj.style.display = "";
            }
        }
        elem_radio.addEventListener("change", () => {
            radio.forEach(elem_radio_inner => {
                const elem_radio_inner_id = elem_radio_inner.id;
                const main_obj_inner = nav_elem.nextElementSibling.querySelector(`.main-${elem_radio_inner_id.split('-')[1]}`);
                if (!elem_radio_inner.checked) {
                    main_obj_inner.style.display = "none";
                }
                else {
                    main_obj_inner.style.display = "";
                }
            });
        });
    });
});


