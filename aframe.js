//順移按鈕1
// AFRAME.registerComponent("teleport", {
//     init: function () {
//       var teleport = this.el;
//       teleport.addEventListener("click", function () {
//         window.location.href = "index2.html";
//       });
//     },
//   });

AFRAME.registerComponent("teleport", {
  init: function () {
    var teleport = this.el;
    teleport.addEventListener("click", function () {
      document.body.innerHTML = `
        <a-scene vr-mode-ui="enabled: true" environment cursor="rayOrigin: mouse; fuse: false"
        raycaster="objects: .raycastable">
        <a-sky src="./source/blue_photo_studio_4k.png" rotation="0 -90 0"></a-sky>

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
            <a-asset-item id="panel" src="./source/html-panel1.glb"></a-asset-item>
            <a-asset-item id="officeModel" src="./source/testimg/mersus_office.glb"></a-asset-item>
            <a-asset-item id="officecomputermodel" src="./source/phishing.glb"></a-asset-item>
            <a-asset-item id="printermodel" src="./source/confidential2.glb"></a-asset-item>
            <a-asset-item id="passwordnote" src="./source/passwordnoteglb.glb"></a-asset-item>
            <a-asset-item id="closebtn" src="./source/close.glb"></a-asset-item>
            <a-asset-item id="phoncall" src="./source/unkownphonecall.glb"></a-asset-item>
            <a-asset-item id="cellphone" src="./source/unlockedcellphone.glb"></a-asset-item>
            <a-asset-item id="whiteboard" src="./source/whiteboard.glb"></a-asset-item>
            <a-asset-item id="usb_flash_drive" src="./source/usb_flash_drive.glb"></a-asset-item>
            <a-asset-item id="id_card" src="./source/id_card_model.glb"></a-asset-item>
            <a-asset-item id="white_board" src="./source/whiteboard.glb"></a-asset-item>
            <a-asset-item id="plants_with_pot" src="./source/plant_with_pot.glb"></a-asset-item>
            <a-asset-item id="pothos_plant" src="./source/pothos_plant.glb"></a-asset-item>
            <a-asset-item id="pictures" src="./source/picture_frame.glb"></a-asset-item>
            <a-asset-item id="tvscreen" src="./source/tv_screen.glb"></a-asset-item>
        </a-assets>
        <!-- 圖片或影片 -->
        <a-assets>
            <img id="windows" src="source/testimg/windows.png">
            <img id="close" src="source/testimg/close.png">
            <audio id="unlockdevicesound" src="./source/You broke the rule,unlocked device.mp3" preload="auto"></audio>
            <audio id="phonecallsound" src="./source/cellphone-vibrating-on-desk-44808.mp3" preload="auto"></audio>
            <!-- <video id="video" autoplay loop="true" src="https://www.youtube.com/watch?v=Z1Yd7upQsXY"></video> -->
        </a-assets>
        <a-sphere position="-8.761 5.578 -3.118"  class="raycastable" teleport></a-sphere>
        <!-- 燈光 -->
        <a-light type="ambient" color="#828278"></a-light>
        <a-light type="point" intensity="1" color="#ebebeb" position="2 4 2"></a-light>
        <script src="aframe.js"></script>
      `;
    });
  },
});

AFRAME.registerComponent("passwordnote", {
  init: function () {
    var passwordnote = this.el;
    var panel = document.querySelector("#html-panel1");
    var passwordsound = document.querySelector("#pssound");
    passwordnote.addEventListener("mouseenter", function () {
      passwordnote.object3D.scale.set(4 ,2 ,2);
    });

    passwordnote.addEventListener("mouseleave", function () {
      passwordnote.object3D.scale.set(4 ,2 ,2);
    });
    passwordnote.addEventListener("click", function () {
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