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
        document.body.innerHTML = `
        <a-scene vr-mode-ui="enabled: true" environment cursor="rayOrigin: mouse; fuse: false"
          raycaster="objects: .raycastable">
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
      //   document.querySelector("a-scene").enterVR();
      });
    },
  });