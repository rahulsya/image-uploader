// import { useState,useCallback} from "react";
import firebase from "./firebase";
function App() {
  // const [file, setFile] = useState([]);

  const onChange = (e) => {
    const imageFile = e.target.files[0];
    const storageRef = firebase.storage().ref();
    storageRef
      .child(`images/${imageFile.name}`)
      .put(imageFile, imageFile.type)
      .on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload progress ${progress} %`);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <div>
      <input type="file" name="image" id="" onChange={onChange} />
      {/* <p>{file.name}</p> */}
    </div>
  );
}

export default App;
