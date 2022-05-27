$(document).ready(function(){    
    // setTimeout(function() {
    //     $('.loader').hide();
    // }, 4000);

    let currentTheme = localStorage.getItem('current-theme');

    if(currentTheme === 'dark'){
        $('body').addClass("dark-mode");
    }else{
        $('body').removeClass("dark-mode");
    }

    //Toggle Theme Btn
    $("#toggleThemeBtn").click(function(){ 
        currentTheme = localStorage.getItem('current-theme');
           
        if(currentTheme === 'light'){
            localStorage.setItem('current-theme', 'dark');
            $('body').addClass("dark-mode");
             
            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("lightBg").addClass("darkBg");
            }; 
        }else{
            localStorage.setItem('current-theme', 'light');
            $('body').removeClass("dark-mode");

            if(Math.floor($(window).scrollTop()) > 60){
                $('.navbar-container').removeClass("darkBg").addClass("lightBg");    
            }
        }
    });

    //Toggle Menu Btn
    $(".menu-btn").click(function(){
        $(".bar1").toggleClass("bar1_transform");
        $(".bar3").toggleClass("bar3_transform");
        $(".bar2").toggleClass("bar2_transform");
        $(".sidenav").slideToggle(400);
    });

    //Scroll Effect
    function toggleNavbarClassOnScroll(){
        let bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        let scrollHeight = Math.floor($(window).scrollTop());

        if(scrollHeight === 0 || scrollHeight < 60){
            if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
                $(".navbar-container").removeClass("lightBg");
            }else{
                $(".navbar-container").removeClass("darkBg");
            }
        }else{
            if(bgColor === "rgb(255, 255, 255)" || bgColor === "rgba(0, 0, 0, 0)"){
                $(".navbar-container").addClass("lightBg");
            }else{
                $(".navbar-container").addClass("darkBg");
            }
        };

    };

    function handleExperienceTabsScrollAnimation(){
        let tabsContainer = $(".experience-detail");
        let tabLinks = $("li.tab-header");

        tabsContainer.each(function (){
            let windowHeight = $(window).innerHeight();
            let elmDistanceFromTop = this.getBoundingClientRect().top;
            let heightToShowElm = 150;

            if(elmDistanceFromTop < windowHeight - heightToShowElm){
                let currentTabContent = this.id;
                $(this).addClass(" aos-init aos-animate");
               
                tabLinks.each(function(){
                    if(this.id === currentTabContent){
                        $(this).addClass(" active");
                    }else{
                        $(this).removeClass("active")
                    }
                });
            }else{
                $(this).addClass(" active");

            }
        });
    };

    //Scrolling event
    $(window).scroll(function(){
        toggleNavbarClassOnScroll();
        handleExperienceTabsScrollAnimation()

        $("section").each(function(){
            if($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
                const currentSectionId = "#" + $(this).attr("id");

                $(".nav-link").each(function(i, elm){
                    $(elm).removeClass('active');

                    if($(elm).attr("href") === currentSectionId){
                        $(elm).addClass("active");
                    }
                });
            }
        });
    });

    //initialize aos
    AOS.init();

    //Call Functions on page load
    toggleNavbarClassOnScroll();
});