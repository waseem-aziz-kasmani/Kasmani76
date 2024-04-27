function TankRound(){  
  
   let mDia = document.getElementById("B1").value;
   let mHeight = document.getElementById("B2").value;
   let mGravity = document.getElementById("B3").value;  
   
   let mRadius = (mDia/2)*(mDia/2);
   let mArea = mRadius*(22/7);
   let mAreaDecimeter = mArea *(2.54*2.54);
   let mLtrDecimeter = mAreaDecimeter/1000;
   let mLtrPerInch= mLtrDecimeter*2.54;
   let mWeigtPerInch = mLtrPerInch * mGravity;
   let mResult = mWeigtPerInch * mHeight ;
   
    document.getElementById("R1").innerHTML =mLtrPerInch.toFixed(2) ;
    document.getElementById("R2").innerHTML =mWeigtPerInch.toFixed(2) ;
    document.getElementById("R3").innerHTML =mResult.toFixed(0) ;
   
    let mRatio = (mDia*1) + (mHeight*1);
    let mH =  (mHeight*100/mRatio).toFixed(0) ;
    let mW =  (mDia*100/mRatio).toFixed(0) ;
    document.getElementById("R4").innerHTML = "Height : " + mH + ", Dia : "+ mW +", Ratio : " + mRatio ;
    let  mCanvas = document.getElementById("O1");
    let mObject = mCanvas.getContext("2d");
    mObject.clearRect(100, 20, 200, 200);
    mObject.fillStyle="Blue";
    mObject.fillRect(100,20,mW,mH);
    
}

function Tank3d(){
   let mWidth = document.getElementById("B4").value;
   let mLen = document.getElementById("B5").value;
   let mHeight = document.getElementById("B6").value;  
   let mGravity = document.getElementById("B6").value; 
   
    document.getElementById("R1").innerHTML =mWidth ;
    document.getElementById("R2").innerHTML =mLen ;
    document.getElementById("R3").innerHTML =mHeight ; 
    let  mCanvas = document.getElementById("O1");
    const gl = mCanvas.getContext("webgl");
   
  const sphereBufferInfo = gl.createSphereWithVertexColorsBufferInfo(gl, 10, 12, 6);
  const cubeBufferInfo   = primitives.createCubeWithVertexColorsBufferInfo(gl, 20);
  const coneBufferInfo   = primitives.createTruncatedConeWithVertexColorsBufferInfo(gl, 10, 0, 20, 12, 1, true, false);

  // setup GLSL program
  var programInfo = webglUtils.createProgramInfo(gl, ["vertex-shader-3d", "fragment-shader-3d"]);

}

