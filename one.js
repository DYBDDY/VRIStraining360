AFRAME.registerComponent("unlocksession", {
  init: function () {
    var unlocksession = this.el;
    var panel = document.querySelector("#uspanel");
    var unlocksessionsound = document.querySelector("#ussound");
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
