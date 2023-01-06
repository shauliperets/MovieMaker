function UploadFile(props) {
  return (
    <div className="upload-file">
      <label for="upload-file__upload" className="upload-file__label">
        בחר
      </label>
      <input id="upload-file__upload" className="upload-file__input" type="file" onChange={props.onChange}></input>
      <img className="upload-file__preview" src={props.source}></img>
    </div>
  );
}

export default UploadFile;
