import React from 'react';

export default function DeleteButton({ clickHandler }) {
    return (
        <>
            <button type="button" className="btn btn-danger ml-5" onClick={clickHandler}>
                Delete
            </button>
        </>
    );
}
