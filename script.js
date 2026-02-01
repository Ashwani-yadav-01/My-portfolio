
    <script>
        const video1 = document.getElementById('projectvideo1');
        const video2 = document.getElementById('projectvideo2');
        const video3 = document.getElementById('projectvideo3');
        const hoversign = document.querySelector(".hover-sign"); // Fixed: changed 'queryselector' to 'querySelector'

        // Sidebar elements
        const sidebar = document.querySelector(".sidebar"); // Fixed: changed 'queryselector' to 'querySelector'
        const menu = document.querySelector(".menu-icon"); // Fixed: changed 'queryselector' to 'querySelector'
        const close = document.querySelector(".close-icon"); // Fixed: changed 'queryselector' to 'querySelector'

        const videoList = [video1, video2, video3];

        videoList.forEach(function(video) {
            video.addEventListener('mouseover', function() {
                video.play();
                hoversign.classList.add("active");
            });
            video.addEventListener('mouseout', function() {
                video.pause();
                hoversign.classList.remove("active"); // Fixed: changed 'classlist' to 'classList'
            });
        });

        // Sidebar elements
        menu.addEventListener("click", function() {
            sidebar.classList.add("open-sidebar"); // Fixed: changed 'sideBar' to 'sidebar'
        });

        close.addEventListener("click", function() {
            sidebar.classList.remove("open-sidebar"); // Fixed: changed 'add' to 'remove' to close the sidebar
            sidebar.classList.add("close-sidebar"); // Optional: if you want to add a class for closing animation
        });
    </script>