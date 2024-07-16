export const formatDateUTC = (timestamp: number) => {
    return new Date(timestamp).toString();
};

export const formatTimestampTo24HourTime = (timestamp: number): string => {
    const date = new Date(timestamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};

export const formatTimestampToDate = (timestamp: number): string => {
    const date = new Date(timestamp);

    const day = date.getDate();

    const month = date.toLocaleString('default', { month: 'short' });

    const formattedDate = `${day}. ${month}`;

    return formattedDate;
};