window.__require=function i(n,t,s){function e(o,h){if(!t[o]){if(!n[o]){var p=o.split("/");if(p=p[p.length-1],!n[p]){var u="function"==typeof __require&&__require;if(!h&&u)return u(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+o+"'")}o=p}var l=t[o]={exports:{}};n[o][0].call(l.exports,function(i){return e(n[o][1][i]||i)},l,l.exports,i,n,t,s)}return t[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<s.length;o++)e(s[o]);return e}({game:[function(i,n){"use strict";cc._RF.push(n,"0debaCk39lL7ILxSjVijJFK","game"),cc.Class({extends:cc.Component,properties:{food:cc.Node,pin11:cc.Node,pin12:cc.Node,pin21:cc.Node,pin22:cc.Node,pin31:cc.Node,pin32:cc.Node,pins:cc.Node,tips:cc.Node,tipsText:cc.Node},onLoad:function(){cc.director.getPhysicsManager().enabled=!0,this.isPin11Pulled=!1,this.isPin12Pulled=!1,this.isPin21Pulled=!1,this.isPin22Pulled=!1,this.isPin31Pulled=!1,this.isPin32Pulled=!1,this.isPinsPulled=!1,this.tips.runAction(cc.moveTo(2,0,0)),this.scheduleOnce(function(){this.tipsText.runAction(cc.scaleTo(1,1))},2),this.scheduleOnce(function(){this.tipsText.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5,1.25),cc.scaleTo(.5,1))))},3),this.pin11.on(cc.Node.EventType.TOUCH_START,function(){this.isPin11Pulled?(this.pin11.runAction(cc.moveTo(.75,this.pin11.x+140,this.pin11.y-85)),this.isPin11Pulled=!1):(this.pin11.runAction(cc.moveTo(.75,this.pin11.x-140,this.pin11.y+85)),this.isPin11Pulled=!0)},this),this.pin12.on(cc.Node.EventType.TOUCH_START,function(){this.isPin12Pulled?(this.pin12.runAction(cc.moveTo(.75,this.pin12.x-140,this.pin12.y-85)),this.isPin12Pulled=!1):(this.pin12.runAction(cc.moveTo(.75,this.pin12.x+140,this.pin12.y+85)),this.isPin12Pulled=!0)},this),this.pin21.on(cc.Node.EventType.TOUCH_START,function(){this.isPin21Pulled?(this.pin21.runAction(cc.moveTo(.75,this.pin21.x+140,this.pin21.y-85)),this.isPin21Pulled=!1):(this.pin21.runAction(cc.moveTo(.75,this.pin21.x-140,this.pin21.y+85)),this.isPin21Pulled=!0)},this),this.pin22.on(cc.Node.EventType.TOUCH_START,function(){this.isPin22Pulled?(this.pin22.runAction(cc.moveTo(.75,this.pin22.x-140,this.pin22.y-85)),this.isPin22Pulled=!1):(this.pin22.runAction(cc.moveTo(.75,this.pin22.x+140,this.pin22.y+85)),this.isPin22Pulled=!0)},this),this.pin31.on(cc.Node.EventType.TOUCH_START,function(){this.isPin31Pulled?(this.pin31.runAction(cc.moveTo(.75,this.pin31.x+140,this.pin31.y-85)),this.isPin31Pulled=!1):(this.pin31.runAction(cc.moveTo(.75,this.pin31.x-140,this.pin31.y+85)),this.isPin31Pulled=!0)},this),this.pin32.on(cc.Node.EventType.TOUCH_START,function(){this.isPin32Pulled?(this.pin32.runAction(cc.moveTo(.75,this.pin32.x-140,this.pin32.y-85)),this.isPin32Pulled=!1):(this.pin32.runAction(cc.moveTo(.75,this.pin32.x+140,this.pin32.y+85)),this.isPin32Pulled=!0)},this),this.pins.on(cc.Node.EventType.TOUCH_START,function(){this.isPinsPulled?(this.pins.runAction(cc.moveTo(.75,this.pins.x-0,this.pins.y-165)),this.isPinsPulled=!1):(this.pins.runAction(cc.moveTo(.75,this.pins.x+0,this.pins.y+165)),this.isPinsPulled=!0)},this)},start:function(){}}),cc._RF.pop()},{}]},{},["game"]);