import '../../App.css';
import React, {useState } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import img1 from "./ImagesForNotice/SE1.png";
import img2 from "./ImagesForNotice/SE2.png";
import img3 from "./ImagesForNotice/SE3.png";
import img4 from "./ImagesForNotice/SE4.png";
// import img2 from "./ImagesForNotice/pic2.png";
// import axios from 'axios';

export default function Services() {

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
          <h1>Time-table/Notice Upload</h1>
          <input type="file" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>

        <br></br>
        <h2>Timetable & Notices Available Below!</h2>
        
        <br></br>
        <Zoom>
          <img className="MyImg" src={img1} width={200} margin-left={100}></img>
        </Zoom>
        <Zoom>
          <img className="MyImg" src={img2} width={200}></img>
        </Zoom>
        <Zoom>
          <img className="MyImg" src={img3} width={200}></img>
        </Zoom>
        <Zoom>
          <img className="MyImg" src={img4} width={200}></img>
        </Zoom>
     
        <br></br>
        <br></br>
        
        <a href="https://pict.edu/pdf/popup/PARENTS%20MEET%20NOTICE%20-SE%20TO%20BE.pdf" className="MyImg">Notice : Parent-Teacher Meeting Notice</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://pict.edu/pdf/popup/time%20table%20in%20sem%20se%20te%20be%20april%202022.pdf" className="MyImg">Notice : Insem SPPU Exam Timetable</a>
        <br></br>
        <br></br>
        <br></br>
        <a href="https://pict.edu/pdf/popup/time%20table%20in%20sem%20se%20te%20be%20april%202022.pdf" className="MyImg">Notice : Insem SPPU Exam Timetable</a>
        
      </div>
    );
  }

