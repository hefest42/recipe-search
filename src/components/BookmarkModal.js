import React from "react";

import { Link } from "react-router-dom";

const BookmarkModal = ({ showModal, setBookmarkModal }) => {
    return (
        <>
            {showModal && (
                <div className="modal centered">
                    <div className="modal-inner">
                        <div className="modal-inner__text">In order to bookmark a recipe, you need to create an account</div>
                        <div className="modal-inner__buttons">
                            <Link to="/create-account">
                                <button>Create Account</button>
                            </Link>
                            <button onClick={() => setBookmarkModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookmarkModal;
