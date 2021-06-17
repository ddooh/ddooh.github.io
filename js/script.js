"use-strict";

$(document).ready(function(){
    var $pline = $('.progressbar.line');
    var $pcircle = $('.progressbar.circle');
    $pline.each(function(i){
        var line = new ProgressBar.Line(this,{
            strokeWidth:6,
            trailWidth:6,
            duration:30000,
            easing: 'easeInOut',
            text: {
                style: {
                    color:'inherit',
                    position: 'absolute',
                    right:'0',
                    top:'-30px',
                    padding: 0,
                    margine: 0,
                    transform: null
                },
                autoStyleContainer: false
                },
                step: function(state, line, attachment){
                    line.setText(Math.round(line.value() * 100) + '%');
                }
            });
            var value = ($(this).attr('data-value') / 100);
            $pline.waypoint(function(){
                line.animate(value);
            },{
                offset: '100%'
            })
        });

        $pcircle.each(function(i){
            var circle = new ProgressBar.SemiCircle(this,{
                strokeWidth: 9,
                trailWidth:5,
                duration: 2000,
                easing: 'easeInOut',
                step: function(state, circle, attachment){
                    circle.setText(Math.round(circle.value() * 100));
                }
            });
            var value = ($(this).attr('data-value') / 100);
            $pcircle.waypoint(function(){
                circle.animate(value);
            },{
                offset:"100%"
            })
        });
    });
