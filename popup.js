'use strict';

var smq = {
  Popup: function(config) {

    this.conf = config || {};

    this.init = function() {
      var conf = config || {};
      //if there are <smq-popup>, remove nodes
      var existingNodes = document.getElementsByTagName("smq-popup");
      if(existingNodes && existingNodes.length > 0) {
        for(var i = 0; i<existingNodes.length; i++) {
          document.body.removeChild(existingNodes[i]);
        }
      }

      //create popup nodes
      this.nodePopup = document.createElement("smq-popup");
      this.nodePopup.innerHTML = '<div class="window"><a class="close">x</a class="close"><header class="api-header"><h1 class="api-title"></h1></header><div class="api-content"></div></div>';
      this.nodePopup.getElementsByClassName("api-title")[0].innerHTML = this.conf.title || "";
      this.nodePopup.getElementsByClassName("api-content")[0].innerHTML = this.conf.innerHtml || "";

      //click "x" button to close popup window
      this.nodeClose = this.nodePopup.getElementsByClassName("close")[0];
      this.nodeClose.addEventListener("click", function() {
        this.close();
      }.bind(this), false);
    };

    this.show = function() {
      //insert nodePopup in body
      document.body.appendChild(this.nodePopup);
    };

    this.close = function() {
      this.nodePopup ? document.body.removeChild(this.nodePopup) : null;
      this.nodePopup = undefined;
    };

    this.init(config);

  }
};




