//*---------------------------------				
function mp3Engine(ver){						
   this.v 		= ver;						
   this.p 		= document.getElementById("mp3Player");		
   this.p.nTime	= 0;						
   this.p.boss	= this;	

	var s = "player_" + ver;
	s += "<a target = '_blank' href='https://littleflute.github.io/bat/mp3/MereChristianity/cd1/player.js'>player.js</a> - ";
	s += "<a target = '_blank' href='https://github.com/littleflute/bat/edit/master/mp3/MereChristianity/cd1/player.js'>player.js*</a>";

   this.p.UI = blo0.blMDiv(document.body,"id_mdiv_4_player_ui",s,300,100,400,300,blColor[4]);					
   this.p.btn  	=  document.createElement("button");		
   this.p.btn.innerHTML	= "+";					
   this.p.btn.boss	= this.p;					
   document.body.appendChild(this.p.btn);				
   var v = this.p.view  	= document.createElement("div");	
   v.style.border 		= "1px blue solid";			
   v.style.display   	= "none";				
   v.id			= "playerView";				
   document.body.appendChild(this.p.view);				
   this.p.btn.onclick	= function(){				
       if(this.innerHTML=="+"){					
          this.innerHTML="-";					
          this.boss.view.style.display="block";			
       }								
       else if(this.innerHTML=="-"){				
          this.innerHTML="+";					
          this.boss.view.style.display="none";			
       }								
   }								
   this.setVolume 	= function(v){					
        this.p.volume = v;						
   }								
   this.setLyricFile = function(filePath){				 
       var t 	= document.getElementById("playerView"); 	
       var divLyr 	= document.createElement("div"); 		
       divLyr.id	= "divLyrID";			 		
       divLyr.src 	= filePath; 					
       divLyr.style.border = "1px red solid"; 			
       divLyr.update	= function(c,d){			
           var s	= divLyr.src + ":" + c + "/" + d;		
           divLyr.innerHTML = s;					
       } 								
        t.appendChild(divLyr); 					
       divLyr.update(0,0);						
   }								
   this. playId = function (id){					
     var b = document.getElementById(id);				 
     if(b==null) b = document.getElementById("1");			
     this.play(b);							
   }								
    this.oldBtn = null;						
    this.play	= function (o){					
        if(this.oldBtn) {						
            this.oldBtn.style.backgroundColor = "green";}		
	     var p = document.getElementById("mp3Player");		
        var s = o.innerHTML; 					
        s = s.split(":");						
	     p.src = s[1];						
	     p.play();							
	     var s = document.getElementById("curSong");		
	     if(s) s.innerHTML = p.src;					
        o.style.backgroundColor="yellow";				
        this.oldBtn = o;						
    }								
    this.myTimeFun = function(){	 				
       var t = document.getElementById("timerShow");		
       var p = document.getElementById("mp3Player"); 		
       var lr = document.getElementById("divLyrID");		
       lr.update(p.currentTime,p.duration);			
       p.nTime++;							
    var s = p.nTime + ": " + p.currentTime + "/" + p.duration;	 
       t.innerHTML = s;						
    if(p.ended) p.boss.playId(parseInt(p.boss.oldBtn.id)+1);	
   }								
   setInterval(this.myTimeFun, 1000);				
   this.setVolume(0.2);						
   this.setLyricFile("xdLrc.lrc");						
   document.title = this.v;					
}									
//*==================================				
var me = new mp3Engine("v0.11. 15 ");
