export class Nav {
    constructor(title, right_link_list) {
        this.title = title;
        this.right_link_list = right_link_list;
        console.log('in constructor, this.title =', this.title);

//        this.createNav();
    }

//    createNav() {
//        const navElement = document.createElement('div');
//        const spanElement = document.createElement('span');
//        spanElement.classList.add('span_title');
//        spanElement.innerText = this.title;
//        navElement.append(spanElement);
//        console.log('title is = ', this.title);
//        console.log('navElement is = ', navElement);
//
//
//        return navElement;
//    }
//
//    elementCreated() {
//        console.log('elementCreated() called');
//        return this.createNav();
//    }

    createNav() {
        console.log('in ateNav(), this.title =', this.title);
        const title = this.title;
        const right_link_list = this.right_link_list;

        const nav_right_link_style = 'display: inline-block; font-size: 15px; margin-right: 15px; float:right;'
        const nav_link_style = 'color: white;'
        let right_link_str = ''
        right_link_list.forEach((link_obj) => {
            console.log(link_obj.notation, link_obj.link);
            right_link_str = right_link_str + `<div style="${nav_right_link_style}"><a href="${link_obj.link}" style="${nav_link_style}">${link_obj.notation}</a></div>`;

        });
        console.log('right_link_str =', right_link_str);

        const nav_style = 'background-color: blue; color: white; padding: 10px; margin: 0px; height : 25px; font-size: 20px;';
        const menu_btn_style = 'display: inline-block; margin : 0 15px 0 5px;'



        const navElementStr = `<div class="nav" style="${nav_style}">
        <div class="menu-btn" style="${menu_btn_style}">
            <img src="./src/image/menu_btn_white.png" style="width: 20px; height: 20px;">

                ${title}

        </div>
        <div style="${nav_right_link_style}">${right_link_str}</div></div>`
        console.log('navElementStr =', navElementStr);
        return navElementStr;
    }

}
