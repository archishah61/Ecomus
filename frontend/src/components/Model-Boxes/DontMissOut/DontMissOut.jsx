import img1 from '../../../assets/images/banner-newleter.jpg'
import { useEffect, useState } from "react";

export default function DontMissOut() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup on page refresh
        setShowPopup(true);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };
    return (
        <div className="DontMissOut" style={{ width: '100%' }}>
            {showPopup && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 p-0 position-relative ">
                                <img
                                    src={img1}
                                    alt="Fashion Model"
                                    className="img-fluid mb-3 rounded-top"
                                    style={{ objectFit: 'contain' }}
                                />
                                <button
                                    type="button"
                                    className="btn-close position-absolute"
                                    aria-label="Close"
                                    onClick={handleClose}
                                    style={{ top: "14px", right: "14px" }}
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <h3>Don&apos;t miss out</h3>
                                <p className="px-5">
                                    Be the first one to get the new product at early bird prices.
                                </p>
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email *"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-dark w-100 mb-2"
                                    >
                                        Keep me updated
                                    </button>
                                    <button
                                        type="button"
                                        className="btn text-muted mb-3 rounded-0 p-0 pb-1"
                                        onClick={handleClose}
                                        style={{ borderBottom: "1px solid black" }}
                                    >
                                        Not interested
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
