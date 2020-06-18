const video_ids = [
    {
        name: 'Guillaume',
        video_id: 'NmJKVq0bYOk',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
    {
        name: 'Karolien',
        video_id: 'KNg6i8YV7LE',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
    {
        name: 'Miet',
        video_id: 'oJEdfRKNAIU',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
    {
        name: 'Sumeyye',
        video_id: 'uXbBiJam24U',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
    {
        name: 'Britt',
        video_id: 'DbtkKI_1Orc',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
    {
        name: 'Stef',
        video_id: 'Dlr7O9Zy6mw',
        img_el: '',
        vid_el: '',
        size: {
            width: 0,
            height: 0
        }
    },
]

let id, vid_id, players
window.addEventListener('click', e => {
    if (e.target.alt !== undefined) {
        let video_object = video_ids.find(object => object.name == e.target.alt)
        vid_id = video_object.video_id;

        let index = video_ids.findIndex(row => row == video_object)
        id = `Player${index}`

        let container = e.target.parentNode
        let current_img = container.querySelector('img')
        video_object.img_el = current_img

        video_object.size.width = parseInt(window.getComputedStyle(current_img).width)
        video_object.size.height = parseInt(window.getComputedStyle(current_img).height)
        container.querySelector('img').style.opacity = 0
        container.innerHTML += `<div id="${id}"></div>`

        onYouTubeIframeAPIReady(video_object)
    }
})

var player
function onYouTubeIframeAPIReady(row) {
    if (!row) return

    player = new YT.Player(id, {
        height: row.size.height,
        width: row.size.width,
        videoId: vid_id,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });

    row.vid_el = player.f
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == 0) {
        event.target.f.parentNode.querySelector('img').style.opacity = 1
        event.target.f.parentNode.removeChild(event.target.f)
    }
    return true
}

function stopVideo() {
    player.stopVideo();
}