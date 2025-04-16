import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Filters from '../components/Filters';

export default function Home() {
    const { filteredMotorcycles } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/motorcycle/${id}`);
    };

    return (
        <section>
            <h1>Welcome to the Bikers Friend!</h1>
            <div>
                <Filters />
            </div>
            <div className="row g-3">
                {filteredMotorcycles &&
                    filteredMotorcycles.map((motorcycle) => (
                        <Card
                            key={motorcycle.id}
                            motorcycle={motorcycle}
                            onClick={() => handleClick(motorcycle.id)}
                        />
                    ))}
            </div>
        </section>
    );
}
