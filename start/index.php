<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="Style/index.css">
    <script src="Script/video.js" defer></script>
</head>
<body>
    <div class="button-grid">
        <button type="button" class="button" data-video="Media/video1.mp4">Button 1</button>
        <button type="button" class="button" data-video="Media/video2.mp4">Button 2</button>
        <button type="button" class="button" data-video="Media/video3.mp4">Button 3</button>
        <button type="button" class="button" data-video="Media/video4.mp4">Button 4</button>
        <button type="button" class="button" data-video="Media/video5.mp4">Button 5</button>
        <button type="button" class="button" data-video="Media/video6.mp4">Button 6</button>
        <button class="primary-button" type="button" data-video="Media/big-button.mp4">Big Button</button>
        <video class="video-player" controls playsinline hidden></video>
    </div>
    </body>
</html>