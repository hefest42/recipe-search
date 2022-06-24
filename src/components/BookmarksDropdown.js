import React from "react";

const BookmarksDropdown = ({ changeBookmarksDropdown }) => {
    return (
        <div className="bookmarks" onMouseLeave={() => changeBookmarksDropdown(false)}>
            <p>You have no bookmarks. Find a recipe you like, and bookmark it!</p>
        </div>
    );
};

export default BookmarksDropdown;
