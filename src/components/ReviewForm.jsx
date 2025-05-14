import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, onSubmitSuccess }) {

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 1
    });

    const setField = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: name === 'vote' ? parseInt(value) : value,
        }));
    };

    const sendForm = (event) => {
        event.preventDefault();

        axios.post(`http://127.0.0.1:3000/movies/${movieId}/reviews`, formData)
            .then(res => {
                console.log("Recensione salvata:", res.data);

                // Svuota il form
                setFormData({
                    name: '',
                    text: '',
                    vote: 1
                });

                // Chiama il refresh delle recensioni
                if (typeof onSubmitSuccess === "function") {
                    onSubmitSuccess();
                }
            })
            .catch(err => {
                console.error("Errore nel salvataggio recensione:", err);
            });
    };

    return (
        <form className="mt-3 mb-3" onSubmit={sendForm}>
            <div className="mb-3">
                <label htmlFor="review-name" className="form-label">Aggiungi il tuo nome:</label>
                <input
                    type="text"
                    className="form-control"
                    id="review-name"
                    value={formData.name}
                    name="name"
                    onChange={setField}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="review-rev" className="form-label">Lascia una descrizione!</label>
                <textarea
                    name="text"
                    className="form-control"
                    id="review-rev"
                    rows="3"
                    value={formData.text}
                    onChange={setField}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="review-vote" className="form-label">Aggiungi un voto:</label>
                <input
                    type="number"
                    min={1}
                    max={5}
                    name="vote"
                    className="form-control"
                    id="review-vote"
                    value={formData.vote}
                    onChange={setField}
                />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary p-2">Invia recensione!</button>
            </div>
        </form>
    );
}