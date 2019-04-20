const dictionary: {
    [key: string]: {
        [key: string]: string
    }
} = {
    from: {
        'lect.': 'lection',
        'pract.': 'practice',
        'lab': 'lab.w.',
        'Lect.': 'Lection',
        'Pract.': 'Practice',
        'Lab.': 'Lab.w.'
    },
    to: {
        'lection': 'lect.',
        'practice': 'pract.',
        'lab': 'lab',
        'Lection': 'Lect.',
        'Practice': 'Pract.',
        'Lab': 'Lab.'
    }
};

export default dictionary;