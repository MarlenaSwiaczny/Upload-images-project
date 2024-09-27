import UploadFile from "./UploadFile.jsx";
import AppNavBar from '../AppNavBar.jsx';

function Upload(props) {
    return (<>
        <h2>Upload plików na stronę</h2>
        <UploadFile setFileUrl={props.setFileUrl} />
            {props.fileUrl && (
            <div>
            <h3>Uploaded File:</h3>
            <img src={props.fileUrl} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
            </div>)}
        </>
    )
}

export default Upload;