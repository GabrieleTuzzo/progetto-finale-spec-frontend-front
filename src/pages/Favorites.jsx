import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
    const { favorites } = useContext(GlobalContext);
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/motorcycle/${id}`);
    };

    return (
        <section>
            <h1>Favorites</h1>
            <p>Here you can see your favorite motorcycles.</p>
            <div className="row g-3">
                {favorites &&
                    favorites.map((motorcycle) => (
                        <Card
                            key={motorcycle.id}
                            item={motorcycle}
                            onClickCard={() => {
                                goToDetail(motorcycle.id);
                            }}
                        />
                    ))}
            </div>
        </section>
    );
}
