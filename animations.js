

function withVelocity() 
{
  $("#firstJSAnimation")
    .velocity("fadeIn", { duration: 1000 })
    .velocity({translateX: "200px"},{ duration:5000 })
    .velocity("reverse");
}

$("#play-velocity").on('click', function(){
  withVelocity();
});



function VelRob() 
{
	$.Velocity.RunSequence
	([
		{ elements: $("#roboHead"), properties: { translateX: 400, rotateZ:720 }, options: { duration: 1500 } },
   		{ elements: $("#roboHead"), properties: { translateY: -100 }, options: { duration: 1000 } },
   		{ elements: $("#roboBody"), properties: { translateY: -100 }, options: { duration: 1000, sequenceQueue: false } },
   		{ elements: $("#roboLegs"), properties: { translateY: -100 }, options: { duration: 1000 }},
   		{ elements: $("#roboHead"), properties: { translateY: -190 }, options: { duration: 1000 }},
   		{ elements: $("#roboBody"), properties: { translateY: -190 }, options: { duration: 1000 ,sequenceQueue:false } },
   		{ elements: $("#roboHead"), properties: { opacity : 0 }, options: { duration: 100 } },
   		{ elements: $("#roboHeadF"), properties: { opacity : 1 }, options: { duration: 1000 } },
   		{ elements: $("#roboHands"), properties: { opacity : 1 }, options: { duration: 1000 , sequenceQueue:false } },
   		{ elements: $("#roboHands"), properties: { opacity : 0 }, options: { duration: 700 } },
   		{ elements: $("#roboHands"), properties: { opacity : 1, scale : 1.2 , translateY: 75 }, options: { duration: 700 } },
   		{ elements: $("#roboHands"), properties: { rotateY: "180deg"}, options: { duration: 700 } },
   		{ elements: $("#roboHeadF"), properties: { rotateY: "180deg"}, options: { duration: 700  , sequenceQueue:false } },
   		{ elements: $("#roboBody"), properties: { rotateY: "180deg" }, options: { duration: 700  , sequenceQueue:false } },
   		{ elements: $("#roboLegs"), properties: { rotateY: "180deg" }, options: { duration: 700  , sequenceQueue:false } }
	]);  
}

$("#play-robo").on('click', function(){
  VelRob();
});



$("#play-end").on('click', function(){
  spring();
});


function spring() {
  
  $("#igT").velocity({ left: "350px" },625,"slow"); 
  $("#igT").velocity({ left: "500px" },625,[1000,50]); 
  $("#pBag").velocity({ left:"470px" },{duration:1030});
  $("#pBag").velocity({ rotateZ: "-60deg" },1000,"easeOutQuart");
  $("#igT").velocity({ opacity:0 },500,"slow");
  $("#pBag")
    .velocity({ rotateZ: "0deg" },1000,"easeInQuart")
    .velocity({ rotateZ: "30deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"easeInQuart")
    .velocity({ rotateZ: "-10deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"easeInQuart")
    .velocity({ rotateZ: "5deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"slow");
  $("#igT").velocity({ left: "350px" },100,"linear");
  $("#igT").velocity({ opacity:1 },50,"linear"); 
}

function spring() {
  
  $("#igT").velocity({ left: "350px" },625,"slow"); 
  $("#igT").velocity({ left: "500px" },625,[1000,50]); 
  $("#pBag").velocity({ left:"470px" },{duration:1030});
  $("#pBag").velocity({ rotateZ: "-60deg" },1000,"easeOutQuart");
  $("#igT").velocity({ opacity:0 },500,"slow");
  $("#pBag")
    .velocity({ rotateZ: "0deg" },1000,"easeInQuart")
    .velocity({ rotateZ: "30deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"easeInQuart")
    .velocity({ rotateZ: "-10deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"easeInQuart")
    .velocity({ rotateZ: "5deg" },800,"easeOutQuart")
    .velocity({ rotateZ: "0deg" },800,"slow");
  $("#igT").velocity({ left: "350px" },100,"linear");
  $("#igT").velocity({ opacity:1 },50,"linear"); 
}


$("#play-text").on('click', function(){
  moveIt();
});


function moveIt()
{
  $("#pb1").velocity({ translateY: "100px" },1000,[100,5]);
  $("#pb2")
    .velocity({ opacity:1 },{ duration:1000 })
    .velocity({ translateX: "100px" },1000,[100,5]);
  $("#pb3")
    .velocity({ opacity:1 },{ duration:2000 })
    .velocity({ rotateZ: "180deg" },1000,[100,5]);

  $("#pb1").velocity({ translateY: "100px" },1000,[100,5]);
  $("#pb2")
    .velocity({ opacity:1 },{ duration:1000 })
    .velocity({ translateX: "100px" },1000,[100,5]);
  $("#pb3")
    .velocity({ opacity:1 },{ duration:2000 })
    .velocity({ rotateZ: "180deg" },1000,[100,5]);   

  $("#pb3")
    .velocity({ opacity:1 },{ duration:2000 })
    .velocity({ rotateY: "0deg", rotateX:"180deg" },3000,[100,5]);

  $("#pb2")
    .velocity({ opacity:1 },{ duration:2000 })
    .velocity({ rotateX:"360deg" },3000,[100,5]);

  $("#pb1")
    .velocity({ opacity:1 },{ duration:2000 })
    .velocity({ rotateY:"360deg" },3000,[100,5]);

  $("#pb2")
    .velocity({ opacity:1 },{ duration:500 })
    .velocity({ translateX: "50px" },3000,[100,5]);

  $("#pb3")
    .velocity({ translateY:"50px" },3000,[100,5]);

  $("#pb1")
    .velocity({ translateX:"-50px" },{ duration:2000 })
    .velocity({ translateX:"-50px" },3000,[100,5]);

}
