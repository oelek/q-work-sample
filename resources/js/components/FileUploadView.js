import React from "react";
import DropZone from "./DropZone";

const FileUploadView = ({onSubmit, disabled, file}) => {

    return (
        <div className={'block file-upload'}>
            <div className={'file-upload-dropzone'}>
                <DropZone onSubmit={onSubmit} disabled={disabled} file={file}/>
            </div>
            <div className={'file-upload-info'}>
                {file ? file.name : ''}
            </div>
        </div>
    )
}
export default FileUploadView
