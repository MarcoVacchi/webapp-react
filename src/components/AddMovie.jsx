import { useState } from "react";
import axios from "axios";

export default function AddMovie({ onSubmitSuccess }) {
    const initiatValues = {
        title: '',
        director: '',
        genre: '',
        abstract: '',
        image: null
    };
    const [formData, setFormData] = useState(initiatValues);

    function setField(e) {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value
        }));
    }


    const sendForm = (e) => {
        e.preventDefault();

        if (!formData.image) {
            alert("Per favore, carica un'immagine.");
            return;
        };

        axios.post("http://127.0.0.1:3000/movies", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                setFormData(initiatValues)

                if (typeof onSubmitSuccess === "function") {
                    onSubmitSuccess();
                }
            })

            .catch(err => {
                console.error("Errore nel salvataggio:", err);
            });
    };


    return <main className="bg-dark add-height text-white">
        <div className="container">
            <form onSubmit={sendForm} className="container-sm">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label mt-3">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={setField}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="director" className="form-label">Regista</label>
                    <input
                        type="text"
                        className="form-control"
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={setField}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genere</label>
                    <input
                        type="text"
                        className="form-control"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={setField}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="abstract" className="form-label">Trama</label>
                    <textarea
                        className="form-control"
                        id="abstract"
                        name="abstract"
                        rows="3"
                        value={formData.abstract}
                        onChange={setField}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Locandina</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={setField}
                        accept="image/*"
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary p-2 mb-3">Aggiungi Film</button>
                </div>
            </form>
        </div>
    </main>
};