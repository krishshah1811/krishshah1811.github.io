// Smooth Scroling
$('a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
        700
        );
    }            
}); 

// Navbar Color

const navbar = document.getElementById('navbar');
      let scrolled = false;
      window.onscroll = function () {
        if (window.pageYOffset > 100) {
            navbar.classList.remove('top');
            if (!scrolled) {
                navbar.style.transform = 'translateY(-70px)';
            }
            setTimeout(function () {
                navbar.style.transform = 'translateY(0)';
                scrolled = true;
            }, 200);
        } else {
            navbar.classList.add('top');
            scrolled = false;
        }
       };




    //   const navbar = document.getElementById('navbar');
    //   let scrolled = false;

    //   window.onscroll = function () {
    //     if (window.pageYOffset > 100) {
    //       navbar.classList.remove('top');
    //       if (!scrolled) {
    //         navbar.style.transform = 'translateY(-70px)';
    //       }
    //       setTimeout(function () {
    //         navbar.style.transform = 'translateY(0)';
    //         scrolled = true;
    //       }, 200);
    //     } else {
    //       navbar.classList.add('top');
    //       scrolled = false;
    //     }
    //   };