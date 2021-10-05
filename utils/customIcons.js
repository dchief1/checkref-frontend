import React from 'react';

const customIcons = {
    formPerson: {
        path: (
            <path
                fill="currentColor"
                d="M10.593 7.51a3.667 3.667 0 1 0-5.186-5.186 3.667 3.667 0 0 0 5.186 5.185zM3.463 13.213a6.417 6.417 0 0 1 10.954 4.537H1.583c0-1.702.677-3.334 1.88-4.537z"
                stroke="#F68C32"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
        viewBox: '0 0 16 19',
    },
    blackMarkGood: {
        path: (
            <path
                d="M5 8.586L1.707 5.293.293 6.707 5 11.414l9.707-9.707L13.293.293 5 8.586z"
                fill="#000"
            />
        ),
        viewBox: '0 0 15 12',
    },
    markGood: {
        path: (
            <path
                d="M5 8.586L1.707 5.293.293 6.707 5 11.414l9.707-9.707L13.293.293 5 8.586z"
                fill="#F37121"
            />
        ),
        viewBox: '0 0 15 12',
    },
    questionSetDuplicate: {
        path: (
            <path
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                fill="#50514F"
            />
        ),
        viewBox: '0 0 24 24',
    },
    questionSetDelete: {
        path: (
            <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                fill="#50514F"
            />
        ),
        viewBox: '0 0 24 24',
    },
    questionSetEdit: {
        path: (
            <path
                d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                fill="#50514F"
            />
        ),
        viewBox: '0 0 24 24',
    },
    questionSetView: {
        path: (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12c.945-4.564 5.063-8 10-8s9.055 3.436 10 8c-.945 4.564-5.063 8-10 8s-9.055-3.436-10-8zm10 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                fill="#50514F"
            />
        ),
        viewBox: '0 0 24 24',
    },
    questionSetLeftArrow: {
        path: (
            <path
                d="M10.686 12.071l4.95 4.95a1 1 0 1 1-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414l-4.95 4.95z"
                fill="#000"
            />
        ),
        viewBox: '0 0 24 24',
    },
};

export default customIcons;
