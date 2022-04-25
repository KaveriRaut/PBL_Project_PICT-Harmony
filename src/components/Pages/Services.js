// import React from "react";
// import '../../App.css';

// export default function Services() {
//     return(
//         <>
//             <h1 className="services">Hello</h1>
            
//         </>
//     )
// }
import '../../App.css';
import React, {useState} from 'react';
// import axios from 'axios';

export default function Services()  {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });

  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}


// export default function services() {
//     // const realFileBtn = document.getElementById("real-file");
//     // const customBtn = document.getElementById("custom-button");
//     // const customTxt = document.getElementById("custom-text");

//     // customBtn.addEventListener("click", function () {
//     //     realFileBtn.click();
//     // });

//     // realFileBtn.addEventListener("change", function () {
//     //     if (realFileBtn.value) {
//     //         customTxt.innerHTML = realFileBtn.value.match(
//     //             /[\/\\]([\w\d\s\.\-\(\)]+)$/
//     //         )[1];
//     //     } else {
//     //         customTxt.innerHTML = "No file chosen, yet.";
//     //     }
//     // });

//     // return (
//     //     <>
//     //         <h1 className="services">
//     //             Notices
//     //         </h1>
//     //         <div className="fileuploader">
//     //             <input type="file" id="real-file" hidden="hidden" />
//     //             <button type="button" id="custom-button">CHOOSE A FILE</button>
//     //             <span id="custom-text">No file chosen, yet.</span>
//     //         </div>

//     //     </>

//     )
// }
// import '../../App.css';
// import React, {useState} from 'react';
// // import axios from 'axios';

// export default function services(){

// //   const [file, setFile] = useState()

// //   function handleChange(event) {
// //       console.log(event.target.files)
// //     setFile(event.target.files[0])
// //   }
  
// //   function handleSubmit(event) {
// //     event.preventDefault()
// //     // const url = 'http://localhost:3000/uploadFile';
// //     const url = 'https://jsonplaceholder.typicode.com/todos/1';
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('fileName', file.name);
// //     const config = {
// //       headers: {
// //         'content-type': 'multipart/form-data',
// //       },
// //     };
// //     axios.post(url, formData, config).then((response) => {
// //       console.log(response.data);
// //     });

// //   }

//   return (
    // <div className="App">
    //     <form onSubmit={handleSubmit}>
    //       <h1>React File Upload</h1>
    //       <input type="file" onChange={handleChange}/>
    //       <button type="submit">Upload</button>
    //     </form>
    // </div>
//   );
// }

