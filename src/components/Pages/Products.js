import React from "react";
import '../../App.css';
import { useState } from "react";

export default function Products(){
    // return(
    //     <h1 className="products">
    //         PRODUCTS
    //     </h1>
    // )
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
          <h1>Resource Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <br></br>
        <h2>Available Resources Are Below!</h2>
        <br></br>
        <a href="https://drive.google.com/drive/u/0/folders/1TAuuKT4kbAlhnSl28muLCqb4eskZlcOn" className="MyImg">Resources : SE Assignment and Lab-Manuals</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://aissmsioit.org/wp-content/uploads/2020/07/SESyllabusCompute.pdf" className="MyImg">Resources : Curriculum for Second Year of Computer Engineering(2019 Course)</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://drive.google.com/drive/folders/1YMCI3ziyARYaD1P3DE2gQKWvKF5XtYBg?usp=sharing" className="MyImg">Resources : Scholarship Application Instruction Guide</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://drive.google.com/drive/folders/1p_Sb4mKVRanEe4v5widl_yhUZ4eDg-Ae?usp=sharing" className="MyImg">Resources : SE Computer Sem 3 Books</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://drive.google.com/drive/folders/1kaAehoyCoKz64ZOFtJetEGIFKX9g15GW?usp=sharing" className="MyImg">Resources : SE Computer Sem 4 Books</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view" className="MyImg">Resources : 450-DSA Que for Practice</a>
    </div>
  );
}