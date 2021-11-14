import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const uploadHandler = (e) => {
    //console.log('Something change');
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }

  return (
    <form>
      <div className="row">
        <div className="data-out">
          <input type="file" onChange={uploadHandler} />
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm;