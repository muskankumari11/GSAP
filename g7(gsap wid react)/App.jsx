import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const App = () => {

  //set random value in gsap
  // const [circle,setCircle]=useState(0)
  // const random=gsap.utils.random(-500,500,100)

  

  const boxRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     rotate: 360,
  //     duration: 0.5,
  //     delay: 1,
  //   });
  // });

  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x:circle,
  //     duration:0.5,

  //   })
  // },[circle])

  // const boxRef=useRef()
  // const rotateBox=function(){
  const {contextSafe}=useGSAP()
  const rotateBox=contextSafe(()=>{
    gsap.to(boxRef.current,{
      rotate:360,
      duration:1

    })
  })

  return (
    <main>
      {/* <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>

      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

<button onClick={rotateBox}>Annimate</button>
<div ref={boxRef} className="box">box</div>



    </main>
  );
};

export default App;



// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";


// gsap.registerPlugin(useGSAP);

// const App = () => {

//   //set random value in gsap
//   // const [circle,setCircle]=useState(0)
//   const randomX=gsap.utils.random(-500,500,100)
//   const rotateX=gsap.utils.random(-360, 360,30)

//   // const boxRef = useRef(null);

//   // useGSAP(() => {
//   //   gsap.from(boxRef.current, {
//   //     rotate: 360,
//   //     duration: 0.5,
//   //     delay: 1,
//   //   });
//   // });

//    useGSAP(()=>{
//     gsap.to(boxRef.current,{
//       x:xValue,
//       duration:1,
//       rotate:roti
//     })
//   }, [xValue,rotateX])

//   const [xValue,setfirst]=useState(0)
//   const [roti,setRoti]=useState(0)
//   const boxRef=useRef()


//   return (
//     <main>
//       {/* <div className="container">
//         <div className="circle"></div>
//         <div ref={boxRef} className="box"></div>
//       </div>

//       <div className="container">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div> */}

// <button onClick={()=>{
//   setxValue(randomX)
//   setRoti(rotateX)

// }}>Annimate</button>
// <div ref={boxRef} className="box"></div>

//     </main>
//   );
// };

// export default App;
