import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import DetailCard from '../components/DetailCard';

export default function DetailPage() {
    const { id } = useParams();
    const { fetchMotorcycleById } = useContext(GlobalContext);
    const [motorcycle, setMotorcycle] = useState(null);

    useEffect(() => {
        async function fetchMotorcycle() {
            const res = await fetchMotorcycleById(id);
            if (!res.success) {
                console.error(res.message);
                return;
            }
            setMotorcycle(res.motorcycle);
            console.log(motorcycle);
        }

        fetchMotorcycle();
    }, [id]);

    console.log(motorcycle);

    return (
        motorcycle && <DetailCard item={motorcycle} additionalClass="my-5" />
    );
}
