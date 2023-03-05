const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {

        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }, bind(this));
    }

};

video.showTags();

// function playVideo(a, b) {
//     console.log(this);

// }

// playVideo.call({ name: 'wosh' }, 1, 2);
// playVideo.apply({ name: 'nosh' }, [1, 2]);
// playVideo.bind({ name: 'josh' })();

// playVideo();
