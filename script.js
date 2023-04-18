const markRead = document.querySelector('.markRead');
const unreadPosts = document.querySelectorAll('.unread');
const redDots = document.querySelectorAll('.notification__red-dot');


markRead.addEventListener('click', () => {

    unreadPosts.forEach(( post => {
        const read = post.getAttribute('data-read');
        if (read === "false") {
            post.setAttribute('data-read', "true");

        }
    }))

    redDots.forEach(( dot => {
        const visible = dot.getAttribute('data-visible');
        if (visible === "true") {
            dot.setAttribute('data-visible', "false");
        }
    }))

    changeNum();


})

function changeNum() {
    if (document.querySelector(".display-bar__amount").innerHTML > 0) {
        document.querySelector(".display-bar__amount").innerHTML = 0;
    };
}
