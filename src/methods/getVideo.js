// export default function getVideo() {
//     // function init() {
//     //     gapi.client.setApiKey('AIzaSyC5jy-9XEclPOh-Z8wrmT3S8SESbkUqit0')
//     //     gapi.client.load('youtube', 'v3', function() {
//     //         //yt api is ready
//     //     })
//     // }

//     async function init() {
//         let response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5jy-9XEclPOh-Z8wrmT3S8SESbkUqit0');
//         let videos = await response.json();

//         console.log(video)
//     }

//     init();


// }


// async function init() {
//     let response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5jy-9XEclPOh-Z8wrmT3S8SESbkUqit0');
//     let video = await response.json();

//     console.log(video)
// }

fetch('https://www.googleapis.com/search?part=snippet&q=YouTube+Data+API&type=video&videoCaption=closedCaption&key={AIzaSyC5jy-9XEclPOh-Z8wrmT3S8SESbkUqit0')
    .then(res => res.json())
    .then(result => console.log(result))

function init() {
    // Prepare request
    gapi.client.setApiKey('AIzaSyC5jy-9XEclPOh-Z8wrmT3S8SESbkUqit0')
    gapi.client.load('youtube', 'v3', function() {
        
    })
}

function then() {
    init()
    const request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: 'video',
        q: encodeURIComponent('hey'),
        maxResults: 5,
        order: 'viewCount',
    })

    request.execute(function(res) {
        console.log(res)
    })

}