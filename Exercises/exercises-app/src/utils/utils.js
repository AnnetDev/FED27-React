export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

export function Card({ children }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '0 auto', maxWidth: '200px', padding: '16px' }}>
            {children}
        </div>
    );
}

export function Clock({ color, time }) {
    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    );
}