import React from "react";

const BookmarksDropdown = ({ changeBookmarks }) => {
    return (
        <div className="bookmarks" onMouseLeave={() => changeBookmarks(false)}>
            <p>You have no bookmarks. Find a recipe you like, and bookmark it!</p>
        </div>
    );
};

export default BookmarksDropdown;
