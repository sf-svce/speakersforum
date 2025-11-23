// Create Countdown
var Countdown = {
  
  $el: $('.countdown'),
  countdown_interval: null,
  total_seconds: 0,
  
  // 🌟 STEP 1: DEFINE THE FIXED TARGET DATE 🌟
  // Replace this date string with your club's event date (e.g., Dec 18, 2025 10:00:00)
  target_date_str: "2026-01-02T10:00:00+05:30", // Example: 10:00 AM IST (India Standard Time)

  // DOM and Value Initialization
  init: function() {
    
    this.$ = {
      days: this.$el.find('.bloc-time.days .figure'),
      hours: this.$el.find('.bloc-time.hours .figure'),
      minutes: this.$el.find('.bloc-time.min .figure'),
      seconds: this.$el.find('.bloc-time.sec .figure')
    };
    
    // Calculate total seconds remaining until the target date
    this.calculateInitialTime(); 
    
    // Animate countdown
    this.count();     
  },

  // 🌟 STEP 2: CALCULATE TIME DIFFERENCE (The core change) 🌟
  calculateInitialTime: function() {
    var now = new Date();
    var targetDate = new Date(this.target_date_str);
    
    // Calculate difference in milliseconds
    var diff_ms = targetDate.getTime() - now.getTime();
    
    if (diff_ms <= 0) {
        this.total_seconds = 0;
        this.values = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return; // Stop if the event has passed
    }

    // Convert milliseconds to total seconds
    this.total_seconds = Math.floor(diff_ms / 1000);

    // Calculate days, hours, minutes, and seconds from total_seconds
    var seconds = this.total_seconds;

    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;

    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    
    this.values = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },

  // 🌟 STEP 3: COUNTDOWN LOGIC (Simplified and corrected) 🌟
  count: function() {
    
    var that = this,
        $day_1 = this.$.days.eq(0),
        $day_2 = this.$.days.eq(1),
        $hour_1 = this.$.hours.eq(0),
        $hour_2 = this.$.hours.eq(1),
        $min_1 = this.$.minutes.eq(0),
        $min_2 = this.$.minutes.eq(1),
        $sec_1 = this.$.seconds.eq(0),
        $sec_2 = this.$.seconds.eq(1);
    
    // Immediately display the calculated initial values
    this.checkHour(this.values.days, $day_1, $day_2);
    this.checkHour(this.values.hours, $hour_1, $hour_2);
    this.checkHour(this.values.minutes, $min_1, $min_2);
    this.checkHour(this.values.seconds, $sec_1, $sec_2);

    this.countdown_interval = setInterval(function() {
        
        // Recalculate time remaining every second for accuracy
        that.calculateInitialTime();
        
        if (that.total_seconds > 0) {
            
            // Update DOM values
            that.checkHour(that.values.days, $day_1, $day_2);
            that.checkHour(that.values.hours, $hour_1, $hour_2);
            that.checkHour(that.values.minutes, $min_1, $min_2);
            that.checkHour(that.values.seconds, $sec_1, $sec_2);
            
        } else {
            clearInterval(that.countdown_interval);
            // Optionally, display "EVENT HAS STARTED" message here
        }
    }, 1000);    
  },
  
  // animateFigure and checkHour functions remain, including the overlap fix

  animateFigure: function($el, value) {
    
    var that         = this,
        $top         = $el.find('.top'),
        $bottom      = $el.find('.bottom'),
        $back_top    = $el.find('.top-back'),
        $back_bottom = $el.find('.bottom-back');

    // FIX 1: HIDE THE STATIC BOTTOM CONTENT IMMEDIATELY (Overlap fix)
    $bottom.css('opacity', 0); 
    
    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX       : '-180deg',
        transformPerspective: 300,
        ease              : Quart.easeOut,
        onComplete          : function() {
            
            // FIX 2: UPDATE THE TOP HALF
            $top.html(value);
            
            // FIX 3: REVEAL AND UPDATE THE BOTTOM HALF AFTER THE FLIP
            $bottom.html(value); 
            $bottom.css('opacity', 1); 
            
            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, { 
        rotationX           : 0,
        transformPerspective: 300,
        ease              : Quart.easeOut, 
        clearProps          : 'all' 
    });    
  },
  
  checkHour: function(value, $el_1, $el_2) {
    
    // Ensure value is correctly padded with leading zero
    var str_value = value.toString().padStart(2, '0');
    var val_1 = str_value.charAt(0);
    var val_2 = str_value.charAt(1);
    
    var fig_1_value = $el_1.find('.top').html();
    var fig_2_value = $el_2.find('.top').html();

    // Animate only if the figure has changed
    if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
    if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
  }
};

// Let's go!
Countdown.init();

// --- ITINERARY TAB LOGIC ---
$(document).ready(function() {
    
    var $tabs = $('.itinerary-tabs');
    var $buttons = $tabs.find('.tab-button');
    var $slider = $tabs.find('.tab-slider');
    var $content = $('.itinerary-content-wrapper');

    // Function to move the slider
    function moveSlider($targetButton) {
        var buttonWidth = $targetButton.outerWidth();
        var buttonPosition = $targetButton.position().left;
        
        // Move the slider using GSAP (TweenMax) for a smooth effect
        TweenMax.to($slider, 0.3, {
            x: buttonPosition,
            width: buttonWidth
        });
    }

    // Initialize slider position on load
    moveSlider($buttons.filter('.active'));

    $buttons.on('click', function() {
        var $clickedButton = $(this);
        var targetTabId = $clickedButton.data('tab');

        if ($clickedButton.hasClass('active')) {
            return;
        }

        // 1. Move the slider
        moveSlider($clickedButton);

        // 2. Change active state for buttons
        $buttons.removeClass('active');
        $clickedButton.addClass('active');

        // 3. Swap the itinerary content
        var $currentActive = $content.find('.itinerary-day.active');
        var $nextActive = $content.find('#' + targetTabId);

        // Hide current tab
        TweenMax.to($currentActive, 0.3, {
            opacity: 0,
            onComplete: function() {
                $currentActive.removeClass('active').addClass('hidden');
                
                // Show next tab
                $nextActive.removeClass('hidden').addClass('active');
                TweenMax.fromTo($nextActive, 0.5, 
                    { opacity: 0, y: 10 }, 
                    { opacity: 1, y: 0 }
                );
            }
        });
    });
});