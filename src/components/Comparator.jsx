import { GlobalContext } from '../contexts/GlobalContext';
import { useContext, useState, useEffect } from 'react';
import DetailCard from './DetailCard';

export default function Comparator() {
    const { comparator, clearComparator, fetchMotorcyclesByIds } =
        useContext(GlobalContext);

    const [motorcycleDetails, setMotorcycleDetails] = useState([]);

    useEffect(() => {
        async function fetchDetails() {
            if (comparator.length > 0) {
                try {
                    const details = await fetchMotorcyclesByIds(comparator);
                    setMotorcycleDetails(details); // Store fetched details
                } catch (error) {
                    console.error('Error fetching motorcycle details:', error);
                }
            } else {
                setMotorcycleDetails([]); // Clear details if comparator is empty
            }
        }

        fetchDetails();
    }, [comparator, fetchMotorcyclesByIds]);

    console.log('motorcycleDetails', motorcycleDetails);

    return (
        <>
            {comparator.length !== 0 && (
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`btn btn-primary position-fixed ${
                        comparator.length < 2 && 'disabled'
                    }`}
                    style={{
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    {comparator.length < 2
                        ? 'Add 1 more to compare!'
                        : `Compare ${comparator.length} motorcycles!`}
                </button>
            )}

            {
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    Comparator
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body row">
                                {motorcycleDetails.map((res) => (
                                    <DetailCard
                                        item={res.motorcycle}
                                        additionalClass="col-md-4 col-lg-3 p-2"
                                        isCompared={true}
                                    />
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        clearComparator();
                                    }}
                                >
                                    Empty Comparator
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
