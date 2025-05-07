
          var galleryImages = [
        {src: "20240817_080529.jpg", caption: "20240817_080529.jpg"},
        {src: "20240817_080536.jpg", caption: "20240817_080536.jpg"},
        {src: "20240817_080858.jpg", caption: "20240817_080858.jpg"},
        {src: "20240817_080916.jpg", caption: "20240817_080916.jpg"},
        {src: "20240817_080936.jpg", caption: "20240817_080936.jpg"},
        {src: "20240817_080954.jpg", caption: "20240817_080954.jpg"},
        {src: "20240821_070357.jpg", caption: "20240821_070357.jpg"},
        {src: "20240817_080916.jpg", caption: "20240817_080916.jpg"},
        {src: "20240821_074227.jpg", caption: "20240821_074227.jpg"},
        {src: "20240821_074326.jpg", caption: "20240821_074326.jpg"},
        {src: "IMG-20240522-WA0002.jpg", caption: "IMG-20240522-WA0002.jpg"},
        {src: "IMG-20240710-WA0008.jpg", caption: "IMG-20240710-WA0008.jpg"}
          ];
          var galleryIndex = 0;
          function showImage(idx) {
        var img = document.getElementById('galleryImage');
        var cap = document.getElementById('galleryCaption');
        galleryIndex = (idx + galleryImages.length) % galleryImages.length;
        img.src = galleryImages[galleryIndex].src;
        cap.textContent = galleryImages[galleryIndex].caption;
          }
          function showPrev() { showImage(galleryIndex - 1); }
          function showNext() { showImage(galleryIndex + 1); }
          // Keyboard navigation (2000s style: arrow keys)
          document.addEventListener('keydown', function(e){
        if(e.key === "ArrowLeft") showPrev();
        if(e.key === "ArrowRight") showNext();
          });
          // Show first image on load
          showImage(0);
