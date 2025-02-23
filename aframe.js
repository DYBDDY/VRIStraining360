
AFRAME.registerComponent("backward1", {
  init: function () {
    var teleport = this.el;
    teleport.addEventListener("mouseenter", function () {
      teleport.object3D.scale.set(5 ,5 ,5);
      console.log("lol")
    });

    teleport.addEventListener("mouseleave", function () {
      teleport.object3D.scale.set(3.692 ,3.692, 3.692);
    });
    teleport.addEventListener("click", function () {
      document.querySelector('a-scene').innerHTML=`
    <a-sky src="./source/entrance-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">
            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="one" src="./source/one.glb"></a-asset-item>
            <a-asset-item id="two" src="./source/two.glb"></a-asset-item>
            <a-asset-item id="three" src="./source/three.glb"></a-asset-item>
            <a-asset-item id="next" src="./source/next.glb"></a-asset-item>
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere>
        <!-- 使用模型或圖片 -->
        <a-entity id="one" gltf-model="#one" position="2.156 2.350 -5.583" scale="2 2 2" class="raycastable"teleport1></a-entity>
        <a-entity id="two" gltf-model="#two" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable"teleport2></a-entity>
        <a-entity id="three" gltf-model="#three" position="-5.522 2.350 -0.950" rotation = "0 74.817 0"scale="2 2 2" class="raycastable" teleport3></a-entity>
        <a-entity id="next" gltf-model="#next" position="9.134 2.350 -4.397" rotation = "0 -90.432 0"scale="4 4 4" class="raycastable" next></a-entity>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box>
        <script src="aframe.js"></script>
        `;
      document.querySelector("a-scene").enterVR();
    });
  },
});

AFRAME.registerComponent("backward2", {
  init: function () {
    var teleport = this.el;
    teleport.addEventListener("mouseenter", function () {
      teleport.object3D.scale.set(5 ,5 ,5);
      console.log("lol")
    });

    teleport.addEventListener("mouseleave", function () {
      teleport.object3D.scale.set(3.692 ,3.692, 3.692);
    });
    teleport.addEventListener("click", function () {
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/to_whiteboard2-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">
            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="four" src="./source/four.glb"></a-asset-item>
            <a-asset-item id="five" src="./source/five.glb"></a-asset-item>
            <a-asset-item id="six" src="./source/six.glb"></a-asset-item>
            <a-asset-item id="previous" src="./source/next.glb"></a-asset-item>
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <!-- <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere> -->
        <!-- 使用模型或圖片 -->
        <a-entity id="four" gltf-model="#four" position="7.723 5.505 -7.752" rotation="0 -49.649 0"scale="2 2 2" class="raycastable" teleport4></a-entity>
        <a-entity id="five" gltf-model="#five" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable" teleport5></a-entity>
        <a-entity id="six" gltf-model="#six" position="-3.113 2.350 9.043" rotation = "0 158.571 0"scale="2 2 2" class="raycastable" teleport6></a-entity>
        <a-entity id="previous" gltf-model="#previous" position="9.134 4.566 -0.438" rotation = "-3.849 -76.945 178.972"scale="4 4 4" class="raycastable" previous></a-entity>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <!-- <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box> -->
        <script src="aframe.js"></script>
        `;
      document.querySelector("a-scene").enterVR();
    });
  },
});

//ONE
AFRAME.registerComponent("teleport1", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML=`
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/unlock_session_threat_360-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="unlocksessionthreatsound" src="./source/mp3/unlocksessionthreat.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="unlocksessionpanel" position="0.382 1.616 -2.430" scale="2.461 2.461 2.461" rotation="0 0.221 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Unlock session threat" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Dont leave unattended" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Lock your computer" position="0.019 0.017 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Use private screen filter" position="0.019 -0.167 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="uksound" sound="src: #unlocksessionthreatsound"></a-entity>
        </a-entity>

         <!-- 互動物件 -->
         <a-box  position="-0.802 -4.726 -22.706" scale="15 20 15" class="raycastable" color="blue"
         visible="false" unlocksession></a-box>

         <a-entity id="backward1" gltf-model="#backward" position="4.544 3.484 -5.583" scale="3.692 3.692 3.692" class="raycastable" backward1></a-entity>
         
        <script src="one.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("unlocksession", {
  init: function () {
    var unlocksession = this.el;
    var panel = document.querySelector("#unlocksessionpanel");
    var unlocksessionsound = document.querySelector("#uksound");
    unlocksession.addEventListener("mouseenter", function () {
      unlocksession.object3D.scale.set(15, 20, 15);
    });

    unlocksession.addEventListener("mouseleave", function () {
      unlocksession.object3D.scale.set(15, 20, 15);
    });
    unlocksession.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        unlocksessionsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        unlocksessionsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});



//TWO
AFRAME.registerComponent("teleport2", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/password_unlock_phone-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="passwordsound" src="./source/mp3/password.mp3" preload="auto"></audio>
            <audio id="unlockphonesound" src="./source/mp3/unlockphone.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="passwordpanel" position="-0.106 2.234 0.234" rotation="0 0.221 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Password on a sticky note" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Dont write passwords down" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Dont share passwords" position="0.019 0.054 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Use strong passwords" position="0.023 -0.069 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Consider using a password manager" position="0.028 -0.188 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="pssound" sound="src: #passwordsound"></a-entity>
        </a-entity>


        <a-entity id="unlockphonepanel" position="-0.106 2.234 0.234" rotation="0 0.221 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Unlocked device" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Lock after use" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Dont leave unattended" position="0.019 0.017 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Use strong passwords" position="0.019 -0.167 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="upsound" sound="src: #unlockphonesound"></a-entity>
        </a-entity>

        <!-- 互動物件 -->
        <a-box position="15.734 3.023 -30.459" scale="5 5 5" color="blue" visible="false" class="raycastable"
            password></a-box>

        <a-box position="15.734 -32.401 -10.495" scale="15 5 15" color="blue" visible="false" class="raycastable"
            unlockphone></a-box>

        <!-- <a-box position="-0.802 -4.726 -22.706" scale="15 20 15" class="raycastable" color="blue" visible="true"
            unlocksession></a-box> -->

        <a-entity id="backward1" gltf-model="#backward" position="6.139 5.620 -5.583" scale="3.692 3.692 3.692"
            class="raycastable" backward1></a-entity>

        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("password", {
  init: function () {
    var password = this.el;
    var panel = document.querySelector("#passwordpanel");
    var passwordsound = document.querySelector("#pssound");
    password.addEventListener("mouseenter", function () {
      password.object3D.scale.set(5, 5, 5);
    });

    password.addEventListener("mouseleave", function () {
      password.object3D.scale.set(5, 5, 5);
    });
    password.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        passwordsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        passwordsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});


AFRAME.registerComponent("unlockphone", {
  init: function () {
    var unlockphone = this.el;
    var panel = document.querySelector("#unlockphonepanel");
    var unlockphonesound = document.querySelector("#upsound");
    unlockphone.addEventListener("mouseenter", function () {
      unlockphone.object3D.scale.set(15 ,5 ,15);
    });

    unlockphone.addEventListener("mouseleave", function () {
      unlockphone.object3D.scale.set(15 ,5, 15);
    });
    unlockphone.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        unlockphonesound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        unlockphonesound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});


//Three
AFRAME.registerComponent("teleport3", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/idcard2-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="idcardsound" src="./source/mp3/idcard.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="idsoundpanel" position="-1.205 1.432 1.976" rotation="0 79.643 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">

            <a-text value="Unattended office access cards" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Dont leave unattended" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Keep on you at all times" position="0.019 0.017 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="idsound" sound="src: #idcardsound"></a-entity>
        </a-entity>
        </a-entity>

        <!-- 互動物件 -->
        <a-box position="-16.929 -19.242 6.939" scale="15 20 15" class="raycastable" color="blue" visible="false"
        idcard></a-box>

        <a-entity id="backward1" gltf-model="#backward" position="-4.032 3.484 -5.583" scale="3.692 3.692 3.692"
            class="raycastable" backward1></a-entity>

        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("idcard", {
  init: function () {
    var idcard = this.el;
    var panel = document.querySelector("#idsoundpanel");
    var idsound = document.querySelector("#idsound");
    idcard.addEventListener("mouseenter", function () {
      idcard.object3D.scale.set(5, 5, 5);
    });

    idcard.addEventListener("mouseleave", function () {
      idcard.object3D.scale.set(5, 5, 5);
    });
    idcard.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        idsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        idsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});

//next
AFRAME.registerComponent("next", {
  init: function () {
    var next = this.el;
    next.addEventListener("mouseenter", function () {
      next.object3D.scale.set(6 ,6 ,6);
      console.log("lol")
    });

    next.addEventListener("mouseleave", function () {
      next.object3D.scale.set(4 ,4 ,4);
    });
    next.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
     document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/to_whiteboard2-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">
            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="four" src="./source/four.glb"></a-asset-item>
            <a-asset-item id="five" src="./source/five.glb"></a-asset-item>
            <a-asset-item id="six" src="./source/six.glb"></a-asset-item>
            <a-asset-item id="previous" src="./source/next.glb"></a-asset-item>
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <!-- <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere> -->
        <!-- 使用模型或圖片 -->
        <a-entity id="four" gltf-model="#four" position="7.723 5.505 -7.752" rotation="0 -49.649 0"scale="2 2 2" class="raycastable" teleport4></a-entity>
        <a-entity id="five" gltf-model="#five" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable" teleport5></a-entity>
        <a-entity id="six" gltf-model="#six" position="-3.113 2.350 9.043" rotation = "0 158.571 0"scale="2 2 2" class="raycastable" teleport6></a-entity>
        <a-entity id="previous" gltf-model="#previous" position="9.134 4.566 -0.438" rotation = "-3.849 -76.945 178.972"scale="4 4 4" class="raycastable" previous></a-entity>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <!-- <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box> -->
        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});


//previous
AFRAME.registerComponent("previous", {
  init: function () {
    var previous = this.el;
    previous.addEventListener("mouseenter", function () {
      previous.object3D.scale.set(6 ,6 ,6);
      console.log("lol")
    });

    previous.addEventListener("mouseleave", function () {
      previous.object3D.scale.set(4 ,4 ,4);
    });
    previous.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/entrance-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">
            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="one" src="./source/one.glb"></a-asset-item>
            <a-asset-item id="two" src="./source/two.glb"></a-asset-item>
            <a-asset-item id="three" src="./source/three.glb"></a-asset-item>
            <a-asset-item id="next" src="./source/next.glb"></a-asset-item>
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <!-- <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere> -->
        <!-- 使用模型或圖片 -->
        <a-entity id="one" gltf-model="#one" position="2.156 2.350 -5.583" scale="2 2 2" class="raycastable" teleport1></a-entity>
        <a-entity id="two" gltf-model="#two" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable" teleport2></a-entity>
        <a-entity id="three" gltf-model="#three" position="-5.522 2.350 -0.950" rotation = "0 74.817 0"scale="2 2 2" class="raycastable" teleport3></a-entity>
        <a-entity id="next" gltf-model="#next" position="9.134 2.350 -4.397" rotation = "0 -90.432 0"scale="4 4 4" class="raycastable" next></a-entity>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <!-- <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box> -->
        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});


//four
AFRAME.registerComponent("teleport4", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/whiteboard-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="whiteboardsound" src="./source/mp3/whiteboard.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="whiteboardpanel" position="-5.896 4.372 -3.399" rotation="20.684 26.586 10.024" scale="2.214 2.214 2.214"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <!-- <a-entity id="closebtn" gltf-model="#closebtn" position=" 0.907 0.421 -0.045" scale=" 0.165 0.165 0.165"
        rotation="" class="raycastable" closebtn>
      </a-entity> -->
            <a-text value="Whiteboards" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="clean after use" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="wbsound" sound="src: #whiteboardsound"></a-entity>
        </a-entity>

        <!-- 互動物件 -->
        <a-box position="-4.401 10.388 -31.189" scale="15 20 15" class="raycastable" color="blue" visible="false"
            whiteboard></a-box>

        <a-entity id="backward2" gltf-model="#backward" position="2.509 6.376 -5.583" scale="3.692 3.692 3.692"
            class="raycastable" backward2></a-entity>

        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("whiteboard", {
  init: function () {
    var whiteboard = this.el;
    var panel = document.querySelector("#whiteboardpanel");
    var wbsound = document.querySelector("#wbsound");
    whiteboard.addEventListener("mouseenter", function () {
      whiteboard.object3D.scale.set(15, 20 ,15);
    });

    whiteboard.addEventListener("mouseleave", function () {
      whiteboard.object3D.scale.set(15, 20 ,15);
    });
    whiteboard.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        wbsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        wbsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});


//SIX
AFRAME.registerComponent("teleport6", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      console.log("aaaa")
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/phishing_and_unkown_phonecall-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="phishingsound" src="./source/mp3/phishingemail2.mp3" preload="auto"></audio>
            <audio id="unkowncallsound" src="./source/mp3/unkowncall.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="phishingpanel" position="-0.469 2.862 -2.427" scale="2.279 2.279 2.279"rotation="0 0.221 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Phishing" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Dont click suspicious email" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="phishsound" sound="src: #phishingsound"></a-entity>
        </a-entity>

        <a-entity id="phonecallpanel" position="-0.469 2.862 -2.427" scale="2.279 2.279 2.279" rotation="0 0.221 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Scam Call" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Be cautios with unkown numbers" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Check where the number is from" position="0.019 0.017 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="ucsound" sound="src: #unkowncallsound"></a-entity>
        </a-entity>

        <!-- 互動物件 -->
        <a-box position="0.112 -2.840 -22.473" scale="21.426 11.687 19.468" class="raycastable" color="blue" visible="false"
        phishing></a-box>

        <a-box position="44.184 -74.192 -18.224"  rotation="8.977 -22.296 -3.252" scale="13.616 9 32.841" class="raycastable" color="blue" visible="false"
        phonecall></a-box>

        <a-entity id="backward2" gltf-model="#backward" position="4.544 3.484 -5.583" scale="3.692 3.692 3.692"
            class="raycastable" backward2></a-entity>

        <script src="six.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("phishing", {
  init: function () {
    var phishing = this.el;
    var panel = document.querySelector("#phishingpanel");
    var phishsound = document.querySelector("#phishsound");
    phishing.addEventListener("mouseenter", function () {
      confidentailfile.object3D.scale.set(21.426 ,11.687, 19.468);
    });

    phishing.addEventListener("mouseleave", function () {
      phishing.object3D.scale.set(21.426, 11.687, 19.468);
    });
    phishing.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        phishsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        phishsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});

AFRAME.registerComponent("phonecall", {
  init: function () {
    var phonecall = this.el;
    var panel = document.querySelector("#phonecallpanel");
    var ucsound = document.querySelector("#ucsound");
    phonecall.addEventListener("mouseenter", function () {
      phonecall.object3D.scale.set(13.616 ,9 ,32.8419);
    });

    phonecall.addEventListener("mouseleave", function () {
      phonecall.object3D.scale.set(13.616 ,9 ,32.841);
    });
    phonecall.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        ucsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        ucsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});

//five
AFRAME.registerComponent("teleport5", {
  init: function () {
    var one = this.el;
    one.addEventListener("mouseenter", function () {
      one.object3D.scale.set(4 ,4 ,4);
      console.log("lol")
    });

    one.addEventListener("mouseleave", function () {
      one.object3D.scale.set(2 ,2 ,2);
    });
    one.addEventListener("click", function () {
      // document.querySelector('a-scene').innerHTML
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/confidenttial_and_usb.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="backward" src="./source/backward.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="confidentailfilesound" src="./source/mp3/confidentialdocuments2.mp3" preload="auto"></audio>
            <audio id="unattendedusbsound" src="./source/mp3/usbdrive.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="confidentailfilepanel" position="0.076 1.723 -1.177" rotation="0 -0.284 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Documents with confidential information" position="-0.800 0.383 0.027"
                scale="0.412 0.412 0.412"></a-text>
            <a-text value="Dont leave laying around" position="-0.473 0.181 0.000" scale="0.409 0.409 0.409"></a-text>
            <a-text value="Keep in a locked drawer" position="-0.451 0 0.015" scale="0.409 0.409 0.409"></a-text>
            <a-entity id="cfsound" sound="src: #confidentailfilesound"></a-entity>
        </a-entity>

        <a-entity id="unattendedusbpanel" position="0.076 1.723 -1.177" rotation="0 -0.284 0"
            geometry="primitive: plane; width: 2; height: 1" material="color:black"
            text="color: blue; align: center; value:; width: 2;" visible="false">
            <a-text value="Unattended USB drive" position="0.036 0.383 0.030" scale="0.532 0.532 0.532"
                text="align: center;"></a-text>
            <a-text value="Dont use" position="0.017 0.181 0.000" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Inform superior" position="0.019 0.017 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-text value="Can contain malware" position="0.019 -0.167 0.015" scale="0.334 0.334 0.334"
                text="align: center;"></a-text>
            <a-entity id="usbsound" sound="src: #unattendedusbsound"></a-entity>
        </a-entity>

        <!-- 互動物件 -->
        <a-box position="1.906 -4.726 -10.186" scale="5 5 10" class="raycastable" color="blue" visible="false"
        confidentailfile></a-box>

        <a-box position="-26.576 -73.465 -52.674" scale="9 9 9" class="raycastable" color="blue" visible="false"
        unattendedusb></a-box>

        <a-entity id="backward2" gltf-model="#backward" position="4.544 3.484 -5.583" scale="3.692 3.692 3.692"
            class="raycastable" backward2></a-entity>

        <script src="aframe.js"></script>
      `;
      document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("confidentailfile", {
  init: function () {
    var confidentailfile = this.el;
    var panel = document.querySelector("#confidentailfilepanel");
    var cfsound = document.querySelector("#cfsound");
    confidentailfile.addEventListener("mouseenter", function () {
      confidentailfile.object3D.scale.set(5, 5 ,10);
    });

    confidentailfile.addEventListener("mouseleave", function () {
      confidentailfile.object3D.scale.set(5, 5, 10);
    });
    confidentailfile.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        cfsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        cfsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});

AFRAME.registerComponent("unattendedusb", {
  init: function () {
    var unattendedusb = this.el;
    var panel = document.querySelector("#unattendedusbpanel");
    var usbsound = document.querySelector("#usbsound");
    unattendedusb.addEventListener("mouseenter", function () {
      unattendedusb.object3D.scale.set(9 ,9, 9);
    });

    unattendedusb.addEventListener("mouseleave", function () {
      unattendedusb.object3D.scale.set(9 ,9, 9);
    });
    unattendedusb.addEventListener("click", function () {
      console.log("hahaha")
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        usbsound.components.sound.stopSound();
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        usbsound.components.sound.playSound();
        console.log("printer show");
      }
    });
  },
});

AFRAME.registerComponent("backward2", {
  init: function () {
    var teleport = this.el;
    teleport.addEventListener("mouseenter", function () {
      teleport.object3D.scale.set(5 ,5 ,5);
      console.log("lol")
    });

    teleport.addEventListener("mouseleave", function () {
      teleport.object3D.scale.set(3.692 ,3.692, 3.692);
    });
    teleport.addEventListener("click", function () {
      document.querySelector('a-scene').innerHTML=`
        <a-sky src="./source/to_whiteboard2-1.jpg" rotation="0 -90 0"></a-sky>

        <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">
            <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
            </a-entity>
            <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
            <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
                raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
        </a-entity>

        <!-- 模型 -->
        <a-assets>
            <a-asset-item id="four" src="./source/four.glb"></a-asset-item>
            <a-asset-item id="five" src="./source/five.glb"></a-asset-item>
            <a-asset-item id="six" src="./source/six.glb"></a-asset-item>
            <a-asset-item id="previous" src="./source/next.glb"></a-asset-item>
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <!-- <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere> -->
        <!-- 使用模型或圖片 -->
        <a-entity id="four" gltf-model="#four" position="7.723 5.505 -7.752" rotation="0 -49.649 0"scale="2 2 2" class="raycastable" teleport4></a-entity>
        <a-entity id="five" gltf-model="#five" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable" teleport5></a-entity>
        <a-entity id="six" gltf-model="#six" position="-3.113 2.350 9.043" rotation = "0 158.571 0"scale="2 2 2" class="raycastable" teleport6></a-entity>
        <a-entity id="previous" gltf-model="#previous" position="9.134 4.566 -0.438" rotation = "-3.849 -76.945 178.972"scale="4 4 4" class="raycastable" previous></a-entity>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <!-- <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box> -->
        <script src="aframe.js"></script>
        `;
      document.querySelector("a-scene").enterVR();
    });
  },
});



// AFRAME.registerComponent("teleport", {
//   init: function () {
//     var teleport = this.el;
//     teleport.addEventListener("click", function () {
      
//       document.querySelector('a-scene').innerHTML = `
//         <a-sky src="./source/unlock_session_threat_360-1.jpg" rotation="0 -90 0"></a-sky>

//         <a-entity id="rig" position="0 1.264 2.704" rotation="0 0 0">

//             <a-entity id="camera" geometry="primitive" camera wasd-controls="acceleration: 10" look-controls>
//             </a-entity>
//             <a-entity oculus-touch-controls="hand: left" laser-controls="hand: left" model="true"
//                 raycaster="objects: .raycastable" thumbstick-logging-move></a-entity>
//             <a-entity oculus-touch-controls="hand: right" laser-controls="hand: right" model="true"
//                 raycaster="objects: .raycastable" thumbstick-logging-look></a-entity>
//         </a-entity>

//         <!-- 模型 -->
//         <a-assets>
//             <a-asset-item id="panel" src="./source/html-panel1.glb"></a-asset-item>
//             <a-asset-item id="officeModel" src="./source/testimg/mersus_office.glb"></a-asset-item>
//             <a-asset-item id="officecomputermodel" src="./source/phishing.glb"></a-asset-item>
//             <a-asset-item id="printermodel" src="./source/confidential2.glb"></a-asset-item>
//             <a-asset-item id="passwordnote" src="./source/passwordnoteglb.glb"></a-asset-item>
//             <a-asset-item id="closebtn" src="./source/close.glb"></a-asset-item>
//             <a-asset-item id="phoncall" src="./source/unkownphonecall.glb"></a-asset-item>
//             <a-asset-item id="cellphone" src="./source/unlockedcellphone.glb"></a-asset-item>
//             <a-asset-item id="whiteboard" src="./source/whiteboard.glb"></a-asset-item>
//             <a-asset-item id="usb_flash_drive" src="./source/usb_flash_drive.glb"></a-asset-item>
//             <a-asset-item id="id_card" src="./source/id_card_model.glb"></a-asset-item>
//             <a-asset-item id="white_board" src="./source/whiteboard.glb"></a-asset-item>
//             <a-asset-item id="plants_with_pot" src="./source/plant_with_pot.glb"></a-asset-item>
//             <a-asset-item id="pothos_plant" src="./source/pothos_plant.glb"></a-asset-item>
//             <a-asset-item id="pictures" src="./source/picture_frame.glb"></a-asset-item>
//             <a-asset-item id="tvscreen" src="./source/tv_screen.glb"></a-asset-item>
//         </a-assets>
//         <!-- 圖片或影片 -->
//         <a-assets>
//             <img id="windows" src="source/testimg/windows.png">
//             <img id="close" src="source/testimg/close.png">
//             <audio id="unlockdevicesound" src="./source/You broke the rule,unlocked device.mp3" preload="auto"></audio>
//             <audio id="phonecallsound" src="./source/cellphone-vibrating-on-desk-44808.mp3" preload="auto"></audio>
//         </a-assets>
//         <a-sphere position="-8.761 5.578 -3.118"  class="raycastable" teleport></a-sphere>
//         <!-- 燈光 -->
//         <a-light type="ambient" color="#828278"></a-light>
//         <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>
//         <script src="aframe.js"></script>
//       `;
//       document.querySelector('a-scene').enterVR()
//     }
//   );
//   },
// });

// AFRAME.registerComponent("passwordnote", {
//   init: function () {
//     var passwordnote = this.el;
//     var panel = document.querySelector("#html-panel1");
//     var passwordsound = document.querySelector("#pssound");
//     passwordnote.addEventListener("mouseenter", function () {
//       passwordnote.object3D.scale.set(4 ,2 ,2);
//     });

//     passwordnote.addEventListener("mouseleave", function () {
//       passwordnote.object3D.scale.set(4 ,2 ,2);
//     });
//     passwordnote.addEventListener("click", function () {
//       var isVisible = panel.getAttribute("visible") === true;
//       if (isVisible) {
//         panel.setAttribute("visible", false);
//         passwordsound.components.sound.stopSound();
//         console.log("printer hide");
//       } else {
//         panel.setAttribute("visible", true);
//         passwordsound.components.sound.playSound();
//         console.log("printer show");
//       }
//     });
//   },
// });