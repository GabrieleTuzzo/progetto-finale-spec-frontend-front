import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

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
        motorcycle && (
            <div className="container my-5">
                <div className="card">
                    <img
                        src={motorcycle.image}
                        className="card-img-top"
                        alt={motorcycle.title}
                    />
                    <div className="card-body">
                        <h1 className="card-title">{motorcycle.title}</h1>
                        <p className="card-text">
                            <strong>Category:</strong> {motorcycle.category}
                        </p>
                        <p className="card-text">
                            <strong>Price:</strong> {motorcycle.price}€
                        </p>
                        <p className="card-text">
                            <strong>CC:</strong> {motorcycle.cc}
                        </p>
                        <p className="card-text">
                            <strong>Height:</strong> {motorcycle.height} cm
                        </p>
                        <p className="card-text">
                            <strong>Empty Weight:</strong>{' '}
                            {motorcycle.emptyWeight} kg
                        </p>
                        <p className="card-text">
                            <strong>Production Year:</strong>{' '}
                            {motorcycle.productionYear}
                        </p>
                        <p className="card-text">
                            <strong>Brand:</strong> {motorcycle.brand}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                Created At:{' '}
                                {new Date(
                                    motorcycle.createdAt
                                ).toLocaleDateString()}
                            </small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                Updated At:{' '}
                                {new Date(
                                    motorcycle.updatedAt
                                ).toLocaleDateString()}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        )
    );
}
