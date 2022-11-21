const humanize = (date: Date): string => {
    const [_, month, day, year, time] = date.toString().split(" ");
    const [hour, minute] = time.split(":");
    return `${month} ${day}, ${year} ${Number(hour) > 12 ? Number(hour)-12 : hour}:${minute}${Number(hour) > 12 ? "pm" : "am"} `;
}

export default humanize;