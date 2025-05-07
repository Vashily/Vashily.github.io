
          var galleryImages = [
        {src: "image2/0c1a1ba2c52c4878a6a432825a2a90b9~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "0c1a1ba2c52c4878a6a432825a2a90b9~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/6ea12c5542034a7f8bdc2f1376e58c6d~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "6ea12c5542034a7f8bdc2f1376e58c6d~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/7ef9b1463762418fb378a2523bb78e46~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "7ef9b1463762418fb378a2523bb78e46~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/476a5c06e6584905bdd560bacd511736~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "476a5c06e6584905bdd560bacd511736~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/3152d27cf48649a98703b8c2fb59930c~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "3152d27cf48649a98703b8c2fb59930c~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/1937425364395626979-d.jpeg", caption: "1937425364395626979-d.jpeg"},
        {src: "image2/2617623439653749959-d.jpeg", caption: "2617623439653749959-d.jpeg"},
        {src: "image2/3934261975647536992-d.jpeg", caption: "3934261975647536992-d.jpeg"},
        {src: "image2/6243574763995196293-d.jpeg", caption: "6243574763995196293-d.jpeg"},
        {src: "image2/6537699354624799231-d.jpeg", caption: "6537699354624799231-d.jpeg"},
        {src: "image2/7371399563469594226-d.jpeg", caption: "7371399563469594226-d.jpeg"},
        {src: "image2/7969216293455439673-d.jpeg", caption: "7969216293455439673-d.jpeg"},
        {src: "image2/9357794499313256626-d.jpeg", caption: "9357794499313256626-d.jpeg"},
        {src: "image2/9594636594217672933-d.jpeg", caption: "9594636594217672933-d.jpeg"},
        {src: "image2/9929934416725673635-d.jpeg", caption: "9929934416725673635-d.jpeg"},
        {src: "image2/b2b6087baaae42dfb34f04c0172a9656~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "b2b6087baaae42dfb34f04c0172a9656~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/ca72fedaa8ac468c9bdddda7ef003145~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "ca72fedaa8ac468c9bdddda7ef003145~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/f02fa82d8c484668be0fb5857c9eeaaf~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "f02fa82d8c484668be0fb5857c9eeaaf~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/5526791364932396794-d.jpeg", caption: "5526791364932396794-d.jpeg"},
        {src: "image2/7936939634595162427-d.jpeg", caption: "7936939634595162427-d.jpeg"},
        {src: "image2/9279944952363365671-d.jpeg", caption: "9279944952363365671-d.jpeg"},
        {src: "image2/801aa1cdb8364bd6b0501525adf4bf28~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "801aa1cdb8364bd6b0501525adf4bf28~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/a2c6b321206d46738c079d1a03453b6a~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "a2c6b321206d46738c079d1a03453b6a~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
        {src: "image2/e33c4f27a1524ab7aa8599e73829c653~tplv-photomode-shrink-v1_720_0_q75.jpeg", caption: "e33c4f27a1524ab7aa8599e73829c653~tplv-photomode-shrink-v1_720_0_q75.jpeg"},
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
