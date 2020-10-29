/**
 * Converts CSV to HTML Table
 *
 */

export const parseCsvToRowsAndColumn = (csvText, csvDelimiter) => {
    const rows = csvText.split('\n');
    if (!rows || rows.length === 0) return [];

    return rows.map(row => row.split(csvDelimiter));
}
