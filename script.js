document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.body.classList.add("screenshot-detected");
        document.body.innerHTML += '<div class="screenshot-block"></div>';

        setTimeout(() => {
            document.body.classList.remove("screenshot-detected");
            let block = document.querySelector('.screenshot-block');
            if (block) block.remove();
        }, 2000);
    }
});
