import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import axios from 'axios'

const uploadFile = (file) => {
    const formData = new FormData()
    formData.append('text_file', file)

    return axios.post('/api/upload', formData)
}

const DropZone = ({onSubmit, disabled}) => {

    const onDrop = useCallback(acceptedFiles => onSubmit(acceptedFiles), [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={'container' + disabled ? ' --is-disabled' : ''} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>}
        </div>
    )
}

const Result = ({word, text, count}) => {
    return (
        <div>
            {text ? text : ''}
            <div className={'result-info'}>
                {word && <div>{word} x {count}</div>}
            </div>
        </div>
    )
}

const FileUploadView = ({onSubmit, disabled, file}) => {

    return (
        <div>
            <DropZone onSubmit={onSubmit} disabled={disabled} file={file}/>
            <div>{file ? file.name : ''}</div>
        </div>
    )
}

const FileUploadContainer = ({disabled}) => {

    const [state, setState] = useState({file: null, result: {}, loading: false});

    const handleSubmit = (files) => {
        const file = files[0] || null
        state.file = file
        state.loading = true
        setState({...state})

        uploadFile(file).then(res => {
            if (res.status < 299) {
                state.result = res.data.data.attributes
                state.loading = false
                setState({...state})
            }
        })
    }

    return (
        <div>
            <FileUploadView file={state.file} onSubmit={handleSubmit} disabled={disabled}/>
            <Result {...state.result}/>
        </div>
    );
}

const FileUpload = () => {
    return (
        <div className="container">
            <FileUploadContainer/>
        </div>
    );
}

export default FileUpload;
