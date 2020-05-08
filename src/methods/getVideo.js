export default function getVideo() {

    function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) { return t[n][r] }) } return res }

    $(function () {
        $("form").on("submit", function (e) {
            e.preventDefault();
            // prepare the request
            var request = gapi.client.youtube.search.list({
                part: "snippet",
                type: "video",
                q: encodeURIComponent(document.getElementsByClassName("videoSearchInput").value),
                maxResults: 5,
                order: "viewCount",
                publishedAfter: "2010-01-01T00:00:00Z"
            });
            // execute the request
            request.execute(function (response) {
                const results = response.result;
                document.getElementsByClassName('searchResults').html("");
                results.items.forEach((item, index) => {
                    console.log(item)
                    // $.get("tpl/item.html", function (data) {
                    //     document.getElementsByClassName('searchResults').append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
                    // });
                });
                resetVideoHeight();
            });
        });

        $(window).on("resize", resetVideoHeight);
    });

    function resetVideoHeight() {
        $(".video").css("height", document.getElementsByClassName('searchResults').width() * 9 / 16);
    }

    function init() {
        gapi.client.setApiKey("YOUR_PUBLIC_KEY");
        gapi.client.load("youtube", "v3", function () {
            // yt api is ready
        });
    }


    
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
}