
          var galleryImages = [
        {src: "WhatsApp Image 2025-04-26 at 19.05.01.jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.01.jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.02 (1).jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.02 (1).jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.02 (2).jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.02 (2).jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.02 (3).jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.02 (3).jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.02.jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.02.jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.04.jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.04.jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.03.jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.03.jpeg"},
        {src: "WhatsApp Image 2025-04-26 at 19.05.03 (1).jpeg", caption: "WhatsApp Image 2025-04-26 at 19.05.03 (1).jpeg"}
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
