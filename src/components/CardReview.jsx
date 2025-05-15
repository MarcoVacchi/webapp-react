export default function CardReview({ data }) {

    const { text, vote, name } = data;

    function stars(vote) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < vote) {
                stars.push(<i key={i} className="fa-solid fa-star stars-color"></i>)
            } else {
                stars.push(<i key={i} className="fa-regular fa-star stars-color"></i>)
            }
        } return stars;
    };

    return <div className="card mb-3 mt-3">
        <div className="card-body">
            < p > Descrizione: {text}</p >
            <p>Utente: {name}</p>
            <p className="card-text">Voto medio: {stars(vote)}{vote}</p>
        </div >
    </div >
};