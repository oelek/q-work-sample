import React, {useState} from 'react';
import axios from 'axios'
import FileUploadView from "./FileUploadView";
import ResultView from "./ResultView";

const uploadFile = (file) => {
    const formData = new FormData()
    formData.append('text_file', file)

    return axios.post('/api/upload', formData)
}

const Container = () => {

    const [state, setState] = useState({
        file: null,
        result: {},
        loading: false
    });

    const handleSubmit = (files) => {
        const file = files[0] || null
        if (file !== null) {
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
    }

    return (
        <div>
            <FileUploadView file={state.file} onSubmit={handleSubmit} disabled={state.disabled}/>
            <ResultView {...state.result}/>
        </div>
    );
}

const App = () => (<Container/>);

export default App;
