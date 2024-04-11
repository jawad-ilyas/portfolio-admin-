document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {

    
            document.getElementById('navbar_top').classList.add('fixed');
            document.getElementById('navbar_top').classList.add('bg-white/90');
            document.getElementById('navbar_top').classList.add('top-0');
            document.getElementById('navbar_top').classList.add('left-0');
            document.getElementById('navbar_top').classList.add('right-0');
            document.getElementById('navbar_top_div').classList.remove('mt-16');
            document.getElementById('navbar_top_div').classList.add('my-4');
            document.getElementById('navbar_top_div').classList.add('ps-8');
            // add padding top to show content behind navbar
      
        } else {
            document.getElementById('navbar_top').classList.remove('fixed');
            document.getElementById('navbar_top').classList.remove('bg-white/90');

      

        }
    });
}); 

