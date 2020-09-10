import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

const DropZone = ({onSubmit, disabled}) => {

    const onDrop = useCallback(acceptedFiles => onSubmit(acceptedFiles), [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDropAccepted: onDrop,
        disabled: disabled,
        multiple: false
    })

    return (
        <div
            className={'dropzone-container ' + (disabled ? ' --is-loading' : '') + (isDragActive ? ' --is-active' : '')} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the file here</p> :
                <p>Drop files here</p>}
        </div>
    )
}

export default DropZone
