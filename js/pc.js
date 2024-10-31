(function(){
    var id = "";
    var clr = "268CD8";
    var top = "20";
    var cb = "";
    var list = false;
    var mthd = "bell";
    am = "Would you like to receive notifications from "+window.location.host;
    dm = "Great. You are already subscribed to notifications from "+window.location.host;
    bm = "Seems like you have blocked notifications. To enable please select allow from url bar.";
    setVars();
    if(id==""){return;}
    js1=document.createElement('script');
    js1.async=true;
    js1.type='text/javascript';
    js1.src='https://d38jt33bvxoy1.cloudfront.net/static/SDK/app-3.0.0.js?pushchamp_appid='+id;
    if(list){
      js1.src += '&pingdbupdates=true';
    }
    if(mthd=="direct"){
      js1.src += '&autosubscribe=true';
    }
    ht=document.getElementsByTagName('script')[0];
    ht.parentNode.insertBefore(js1,ht);

    js2=document.createElement('script');
    js2.type='text/javascript';
    js2.innerHTML='pcbell={click:function(){var e=pushchamp.getState();"granted"==e?(document.getElementById("bell_msg").innerHTML=dm,document.getElementById("bell_action").style.display="none"):"denied"==e?(document.getElementById("bell_msg").innerHTML=bm,document.getElementById("bell_action").style.display="block"):"default"==e&&(document.getElementById("bell_msg").innerHTML=am,document.getElementById("bell_action").style.display="block"),pc=document.getElementById("belctn").className,-1!=pc.search("slideOutRight")?document.getElementById("belctn").className="bell-container animated slideOutLeft":"granted"==e&&document.getElementById("pc_ntf_drw")?document.getElementById("pc_ntf_drw").className="ntf-drr":document.getElementById("belctn").className="bell-container animated slideOutRight"},open:function(){localStorage.getItem("pushchamp_subscription_id")||pcbell.click()},loadUI:function(e){e&&(document.getElementById("belctn").style.display="none");for(var t=document.getElementsByClassName("pc-subscribe-btn"),n=0;n<t.length;n++)"default"==pushchamp.getState()?t[n].addEventListener("click",function(){pushchamp.startSubscription()},!1):t[n].style.display="none"}};';
    ht=document.getElementsByTagName('script')[0];
    ht.parentNode.insertBefore(js2,ht);

    isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    isFirefox = typeof InstallTrigger !== 'undefined';
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    isChrome = !!window.chrome && !isOpera;
    isIE = /*@cc_on!@*/false || !!document.documentMode;
    
    if(isChrome || isSafari || (isFirefox && navigator.userAgent.indexOf("Android") == -1)){
      if (!('serviceWorker' in navigator) && !('safari' in window && 'pushNotification' in window.safari)){
        return;
      }
    }else{
      return;
    }

    st=document.createElement('style');
    st.type='text/css';
    st.rel='stylesheet';
    st.innerHTML='.bell-container{z-index:1000;width:320px;height:120px;position:fixed;top:'+top+'%;right:-256px}.animated{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.shake{-webkit-animation-name:shake;animation-name:shake}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}.bell-container .handle{width:18%;float:left;cursor:pointer;margin-right:2%}.bell-container .ghanti{box-shadow:0 0 10px #444;padding:9px;border-radius:35px;border:1px solid #fff;background-color:#'+clr+'}.bell-container .drawer{width:79.68%;float:right;background-color:#'+clr+';height:100%;border-radius:5px 0 0 5px;border:1px solid #fff;border-right:none;box-shadow:5px 5px 2px #888}.bell-container .drawer .action-box{display:table;height:80px;width:100%}.bell-container .drawer .bell-msg{color:#fff;font-family:sans-serif;text-align:center;display:table-cell;vertical-align:middle;font-size:14px;padding:0 5px}.bell-container .action-buttons{margin-top:10px;position:absolute;bottom:10px;right:21%}.bell-container .btn-holder{width:50%;float:left;font-size:12px}.bell-container .btn-holder .acbtn{padding:5px 15px;text-decoration:none;color:#fff;border-radius:2px;font-family:sans-serif}.bell-container .ok-btn{float:right;margin-right:3px;background-color:#79C533}.bell-container .ltr-btn{float:left;margin-left:3px;background-color:#E83840}@-webkit-keyframes shake{0%,100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}}@keyframes shake{0%,100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translate3d(-256px,0,0);transform:translate3d(-256px,0,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translate3d(-256px,0,0);transform:translate3d(-256px,0,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-256px,0,0);transform:translate3d(-256px,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-256px,0,0);transform:translate3d(-256px,0,0)}}.pc-subscribe-btn{-webkit-border-radius:10;-moz-border-radius:10;border-radius:10px;-webkit-box-shadow:0 1px 10px #333;-moz-box-shadow:0 1px 10px #333;box-shadow:0 1px 10px #333;font-family:Arial;color:#fff;font-size:17px;padding:10px 20px 10px 40px;border:solid #fff 2px;text-decoration:none;background:url(https://d38jt33bvxoy1.cloudfront.net/static/images/notif_header.png) no-repeat scroll 10px 15px transparent;background-position-y:center;background-size:20px 20px;background-color:#139CF9;display:inline-block;cursor:pointer}.pc-subscribe-btn:hover{background-color:#0967A7;text-decoration:none}.ntf-drr .ntf-hdr .ntf-drr-cls span,.ntf-drr .ntf-hdr .ntf-drr-ttl span{font-size:25px}.ntf-drr{height:100%;width:100%;max-width:450px;background-color:#fff;position:fixed;top:0;right:0;z-index:10000;overflow-y:auto;border-left:1px solid #777}.ntf-drr.hide{display:none}.ntf-drr .ntf-hdr{height:50px;padding:20px 0 0 10px}.ntf-drr .ntf-hdr .ntf-drr-ttl{float:left;width:90%}.ntf-drr .ntf-hdr .ntf-drr-cls{float:left;width:10%;cursor:pointer}.ntf-drr ul.ntf-grp{margin:10px 0 0 10px;width:95%;float:left;padding:0}.ntf-drr li.ntf-grp-itm{list-style-type:none;clear:both;padding:10px 0;float:left;width:100%;border-top:1px solid #aaa;cursor:pointer}.ntf-drr li.ntf-grp-itm:hover{background-color:#eee}.ntf-drr li.ntf-grp-itm:last-child{border-bottom:1px solid #aaa}.ntf-drr .ntf-sgl{float:left;width:100%}.ntf-drr .ntf-sgl .ntf-sgl-img{width:20%;float:left}.ntf-drr .ntf-sgl .ntf-sgl-img img{width:50px;margin:0 auto}.ntf-drr .ntf-sgl .ntf-sgl-cnt{width:78%;float:left;margin-left:2%}.ntf-drr .ntf-sgl .ntf-sgl-ttl{font-weight:700}';
    document.body.appendChild(st);

    el = '<div class="bell-container" id="belctn" style="display:none"><div class="handle"><div class="ghanti"><img id="ghn" src="https://d38jt33bvxoy1.cloudfront.net/static/images/bell.png" style="width:38px;vertical-align:middle;" onmouseover=\'setTimeout(function(){document.getElementById("ghn").className=""},100),this.className="animated shake";\' onClick=\'pcbell.click();\'/></div></div><div class="drawer"><div class="action-box"><span class="bell-msg" id="bell_msg">Would you like to receive notifications from '+window.location.host+'</span></div><div id="bell_action" class="action-buttons"><div class="btn-holder"><a class="ok-btn acbtn" id="ok_btn" href="javascript:void(0)" onClick=\'pushchamp.startSubscription("'+cb+'");document.getElementById("ghn").click();\'>okay</a></div><div class="btn-holder"><a class="ltr-btn acbtn" id="ltr_btn" href="javascript:void(0)" type="button" onClick=\'document.getElementById("ghn").click();\'>later</a></div></div></div></div>';
    ed = document.createElement('div');
  ed.innerHTML = el;
  document.body.appendChild(ed);

if(list && !isSafari){
  nl = '<div class="ntf-hdr"> <div class="ntf-drr-ttl"><span>Notifications</span></div><div class="ntf-drr-cls" id="ntf_drr_cls" onclick=\'document.getElementById("pc_ntf_drw").className="ntf-drr hide";\'><span>&#10005;</span></div></div><ul class="ntf-grp" id="pc_ntf_grp"></ul>';
  nd = document.createElement('div');
  nd.setAttribute("id", "pc_ntf_drw");
  nd.className = "ntf-drr hide";
  nd.innerHTML = nl;
  document.body.appendChild(nd);
}

  function setVars() {
      var scripts = document.getElementsByTagName("script");
      for(var i=0; i<scripts.length; i++) {
        var parts = scripts[i].src.split("&");
        for (var j=0; j<parts.length; j++){
          if(parts[j].indexOf("pushchamp_appid=") > -1) {
            id = parts[j].split("pushchamp_appid=")[1];
          }
          if(parts[j].indexOf("pcbell_color=") > -1) {
            clr = parts[j].split("pcbell_color=")[1];
          }
          if(parts[j].indexOf("pcbell_top=") > -1) {
            top = parts[j].split("pcbell_top=")[1];
          }
          if(parts[j].indexOf("pcbell_text=") > -1) {
            am = decodeURIComponent(parts[j].split("pcbell_text=")[1].replace(/\+/g," "));
          }
          if(parts[j].indexOf("pcbell_cb=") > -1) {
            cb = parts[j].split("pcbell_cb=")[1];
          }
          if(parts[j].indexOf("pcbell_list=") > -1) {
            list = true;
          }
          if(parts[j].indexOf("pcbell_method=") > -1) {
            mthd = parts[j].split("pcbell_method=")[1];
          }
        }
      }
      return "";
  }
  if (mthd=="bell"){
    setTimeout(function(){if(!localStorage.getItem("pcbell_shown")){pcbell.open();localStorage.setItem("pcbell_shown", true);}}, 5000);
  }

  window.addPCNotif = function(notifs){
    for(var i=0; i<notifs.length; i++){
      var ul = document.getElementById("pc_ntf_grp");
      st=document.createElement('li');
      st.className = "ntf-grp-itm";
      var lu = notifs[i].landing_url?notifs[i].landing_url:window.location.origin;
      st.onclick = function(){window.open(lu, '_blank');};
      st.innerHTML  = '<div class="ntf-sgl"> <div class="ntf-sgl-img"> <img src="'+notifs[i].icon+'"/> </div><div class="ntf-sgl-cnt"> <div class="ntf-sgl-ttl"> <span>'+notifs[i].title+'</span> </div><div class="ntf-sgl-bdy"> <span>'+notifs[i].body+'</span> </div></div></div>';
      ul.insertBefore(st, ul.childNodes[0]);
    }
  }

  window.updatePCUI = function(){
    if(mthd=="direct" || mthd=="self"){
      if(list && localStorage.getItem("pushchamp_subscription_id")){
        document.getElementById("belctn").style.display = "block";
      }
    }else{
      document.getElementById("belctn").style.display = "block";
    }
  }
  updatePCUI();
})();
