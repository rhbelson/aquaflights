// var mymap = L.map('mapid').setView([39.8283, -98.5795], 4);
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox.streets',
//         accessToken: 'pk.eyJ1Ijoicm9iZXJ0YmVsc29uMjAxOSIsImEiOiJjamtpa3dtZTYxNmx0M3hxaDMxdzVlZHF5In0.JLU7BiaFZrYdvsFLJnJriQ'
//     }).addTo(mymap);

//     //Add Source/DEst Airport
//     var origin_airport = L.marker([35.8283, -77.95]).addTo(mymap);
//     origin_airport.bindPopup("<b>Origin</b><br>DCA").openPopup();
//     var dest_airport = L.marker([35.2283, -122.95]).addTo(mymap);
//     dest_airport.bindPopup("<b>Destination</b><br>SFO").openPopup();

//    // Leaflet Map Data
    

//     // var airplaneIcon = L.icon({
//     //     iconUrl: 'airplane.png',
//     //     // shadowUrl: 'airplane.png',

//     //     iconSize:     [38, 38], // size of the icon
//     //     shadowSize:   [50, 64], // size of the shadow
//     //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     //     shadowAnchor: [4, 62],  // the same for the shadow
//     //     popupAnchor:  [1, 1] // point from which the popup should open relative to the iconAnchor
//     // });
//     // L.marker([35, -100], {icon: airplaneIcon}).addTo(mymap);

window.onload=function() {
	if (localStorage.setItem('index')==null) {
		console.log("null case");
		localStorage.setItem('index', '0');
	} 
	if (localStorage.getItem('index')=='0') {
		console.log("0 case");
  		document.getElementById("pref-perpage").selectedIndex=0;
	}
	//Latency selected
	if (localStorage.getItem('index')=='1') {
		console.log("1 case");
		document.getElementById("pref-perpage").selectedIndex=1;
	}
	//Bandwidth selected
	if (localStorage.getItem('index')=='2') {
		console.log("2 case");
		document.getElementById("pref-perpage").selectedIndex=2;
	}
	//ATF selected
	if (localStorage.getItem('index')=='3') {
		console.log("3 case");
		document.getElementById("pref-perpage").selectedIndex=3;
	}
};


function changeLegend() {
	// Inflight Provider selected
	if (document.getElementById("pref-perpage").selectedIndex==0) {
		localStorage.setItem('index', '0');
		document.getElementById("legend_k1").textContent="Gogo";
		document.getElementById("legend_k2").textContent="Panasonic Aviation";
		document.getElementById("legend_k3").textContent="Inmarsat";
		document.getElementById("legend_k4").textContent="Other";
		document.getElementById("pref-perpage").selectedIndex=0;
	}
	//Latency selected
	if (document.getElementById("pref-perpage").selectedIndex==1) {
		localStorage.setItem('index', '1');
		document.getElementById("legend_k1").textContent="<250 ms";
		document.getElementById("legend_k2").textContent="250-400 ms";
		document.getElementById("legend_k3").textContent="400-550 ms";
		document.getElementById("legend_k4").textContent="550+ ms";
		document.getElementById("pref-perpage").selectedIndex=1;
	}
	//Bandwidth selected
	if (document.getElementById("pref-perpage").selectedIndex==2) {
		localStorage.setItem('index', '2');
		document.getElementById("legend_k1").textContent="<1 Mbps";
		document.getElementById("legend_k2").textContent="1-2 Mbps";
		document.getElementById("legend_k3").textContent="2-5Mbps";
		document.getElementById("legend_k4").textContent="5+ Mbps";
		document.getElementById("pref-perpage").selectedIndex=2;
	}
	//ATF selected
	if (document.getElementById("pref-perpage").selectedIndex==3) {
		localStorage.setItem('index', '3');
		document.getElementById("legend_k1").textContent="<150 ms";
		document.getElementById("legend_k2").textContent="150-300 ms";
		document.getElementById("legend_k3").textContent="300-450 ms";
		document.getElementById("legend_k4").textContent="450+ ms";
		document.getElementById("pref-perpage").selectedIndex=3;
	}

}


function getMap() {
	console.log("getMap() called");
	// $("content").fadeOut();
	document.getElementById("content").hidden=true;
	document.getElementById("map_jumbo").hidden=false;
	document.getElementById("legend/parameters").hidden=false;
	// $("map_jumbo").fadeIn();
}


function getRankings() {
	console.log("getRankings() called");
	document.getElementById("content").hidden=false;
	document.getElementById("map_jumbo").hidden=true;
	document.getElementById("legend/parameters").hidden=true;
}


// -----------------------------------------------------------------------------------------------------------------------------------------
/* FUNCTIONS */

	function goLines() {
			
		var golinetimer = 0;
		
		$('.line').each(function() {
			
			var thisline = $(this);
			
			setTimeout(function (){ 
			
				thisline.fadeTo('fast', 1, function() {
					
					(thisline).find('.line__bar-content > div').each(function() {
						var pc = $(this).data('pc');
						$(this).css('width', pc + '%');
					});
					
				});		
				
			}, golinetimer);
			
			golinetimer = golinetimer + 100;
			
		});
	}


// -----------------------------------------------------------------------------------------------------------------------------------------
/* DOCUMENT READY */


	$(document).ready(function () {
		
		// Detect Mobile Browsers
		(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
		
		
		$('.js__show-more').on('click', function() {
			var toshow     = $(this).parents('.line').find('.line__btm');
			var parentline = $(this).parents('.line');
			
			if ( (toshow).is(':visible') ) {
				(toshow).slideUp('fast', function() {
					(parentline).removeClass('line--open');
				});
			} else {
				$('.line__btm').each(function() { 
					$(this).slideUp('fast', function() {
						$(this).parents('.line').removeClass('line--open');
					}); 
				});
				(toshow).slideDown('fast');
				(parentline).addClass('line--open');
			}
			
			
		});
		
		
		$('.legend__box > span').on('click', function() {
			var bar = $(this).parent('.legend__box').data('bar');
			console.log(bar);
			$( '.' + bar ).toggleClass('bar--off');
			$(this).parent('.legend__box').toggleClass('legend__box--off');
		});
		
		
		$('.js__methodology-close').on('click', function(e) {
			e.preventDefault();
			$('.methodology').fadeOut('fast', function() {
				$('body').css('overflow', 'auto');
			});
		});
		$('.js__methodology-open').on('click', function(e) {
			e.preventDefault();
			$('body').css('overflow', 'hidden');
			$('.methodology').fadeIn('fast', function() {});
		});
		
		

		if ($.browser.mobile) {
			$('.legend__box-q > span, .legend__box-tooltip').on('click', function() {
				if ($(this).parents('.legend__box-q').find('.legend__box-tooltip').is(":visible")) {
					$(this).parents('.legend__box-q').find('span').removeClass('highlighted');
					$('.legend__box-tooltip').fadeOut('fast');
				} else {
					$('.legend__box-tooltip').fadeOut('fast');
					$('.legend__box-q > span').removeClass('highlighted');
					$(this).parents('.legend__box-q').find('.legend__box-tooltip').fadeToggle('fast');
					$(this).parents('.legend__box-q').find('span').addClass('highlighted');
				}
			});
		} else {
			$('.legend__box-q > span').hover( 
				function() {
					$(this).parents('.legend__box-q').find('.legend__box-tooltip').fadeIn('fast');
					$(this).addClass('highlighted');
				}, function () {
					$(this).removeClass('highlighted');
					$(this).parents('.legend__box-q').find('.legend__box-tooltip').fadeOut('fast');
				}
			);
		}
		
		
	
		
		
		

	});

