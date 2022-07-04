import React from "react";

import { Link } from "react-router-dom";

const BookmarkModal = ({ showModal, setBookmarkModal }) => {
    return (
        <>
            {showModal && (
                <div className="modal centered">
                    <div className="modal-inner">
                        <div className="modal-inner__text">In order to bookmark a recipe, you need to log in</div>
                        <div className="modal-inner__buttons">
                            <Link to="/log-in">
                                <button>Log In</button>
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
