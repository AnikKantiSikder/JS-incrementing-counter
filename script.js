
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        // (+) converts the data from string to number
        // console.log(target, typeof target);
        const c = +counter.innerText;

        const increment = target / 200;
        //console.log(increment, typeof increment);
        if(c < target) {
            counter.innerText = `
                ${Math.ceil(c + increment)}
            `;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})