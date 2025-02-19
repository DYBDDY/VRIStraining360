
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
      // document.querySelector('a-scene').innerHTML
      document.body.innerHTML = `
      <a-scene vr-mode-ui="enabled: true" environment cursor="rayOrigin: mouse; fuse: false"
        raycaster="objects: .raycastable">
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
        <a-entity id="html-panel" position="0.382 1.616 -2.430" scale="2.461 2.461 2.461" rotation="0 0.221 0"
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

         <a-entity id="backward" gltf-model="#backward" position="4.544 3.484 -5.583" scale="3.692 3.692 3.692" class="raycastable" backward></a-entity>
         
        <script src="one.js"></script>
      `;
      // document.querySelector('a-scene').enterVR()
    }
  );
  },
});

AFRAME.registerComponent("unlocksession", {
  init: function () {
    var unlocksession = this.el;
    var panel = document.querySelector("#html-panel");
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

AFRAME.registerComponent("backward", {
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
      document.body.innerHTML = `
      <a-scene vr-mode-ui="enabled: true" environment cursor="rayOrigin: mouse; fuse: false"
        raycaster="objects: .raycastable">
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
        </a-assets>

        <!-- 圖片或影片 -->
        <a-assets>
            <audio id="passwordsound" src="./source/mp3//password.mp3" preload="auto"></audio>
        </a-assets>

        <!-- 順移 -->
        <a-sphere position="-8.761 5.578 -3.118" class="raycastable" teleport></a-sphere>
        <!-- 使用模型或圖片 -->
        <a-entity id="one" gltf-model="#one" position="2.156 2.350 -5.583" scale="2 2 2" class="raycastable"teleport1></a-entity>
        <a-entity id="two" gltf-model="#two" position="-3.179 2.350 -5.583" scale="2 2 2" class="raycastable"></a-entity>
        <a-entity id="three" gltf-model="#three" position="-5.522 2.350 -0.950" rotation = "0 74.817 0"scale="2 2 2" class="raycastable"></a-entity>

        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動物件 -->
        <a-box id="passwordnote" position="0.396 -4.726 -8.793" scale="4 2 2" class="raycastable" color="blue"
            visible="false" passwordnote></a-box>
        <script src="aframe.js"></script>
        `;
    //   document.querySelector("a-scene").enterVR();
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
      document.body.innerHTML = `
      <a-scene vr-mode-ui="enabled: true" environment cursor="rayOrigin: mouse; fuse: false"
        raycaster="objects: .raycastable">
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
            <audio id="unlocksessionthreatsound" src="./source/mp3/unlocksessionthreat.mp3" preload="auto"></audio>
        </a-assets>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>

        <!-- 互動面板 -->
        <a-entity id="html-panel" position="0.382 1.616 -2.430" scale="2.461 2.461 2.461" rotation="0 0.221 0"
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

         <a-entity id="backward" gltf-model="#backward" position="4.544 3.484 -5.583" scale="3.692 3.692 3.692" class="raycastable" backward></a-entity>
         
        <script src="one.js"></script>
      `;
      // document.querySelector('a-scene').enterVR()
    }
  );
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