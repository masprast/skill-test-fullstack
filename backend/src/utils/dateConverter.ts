export function ubahTanggal(tanggal: string) {
  const bulan = [
    { id: 'Januari', en: 'January' },
    { id: 'Februari', en: 'February' },
    { id: 'Maret', en: 'March' },
    { id: 'April', en: 'April' },
    { id: 'Mei', en: 'May' },
    { id: 'Juni', en: 'June' },
    { id: 'Juli', en: 'July' },
    { id: 'Agustus', en: 'August' },
    { id: 'September', en: 'September' },
    { id: 'Oktober', en: 'October' },
    { id: 'November', en: 'November' },
    { id: 'Desember', en: 'December' },
  ];
  const bagianTgl = tanggal.split(' ');
  const bln = bulan.find((b) => {
    if (b.id == bagianTgl[1]) return b;
  }).en;

  const formatEN = `${bln} ${bagianTgl[0]}, ${bagianTgl[2]}`;
  const parsedDate = new Date(Date.parse(formatEN));

  const stringTgl = parsedDate.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const tanggalUbahan = new Date(stringTgl);
  tanggalUbahan.setUTCHours(0, 0, 0, 0);

  return tanggalUbahan;
}

// function convertLocaleDateString(dateString, fromLocale, toLocale) {
//   // Define month names in both locales
//   const monthNamesId = [
//     'Januari',
//     'Februari',
//     'Maret',
//     'April',
//     'Mei',
//     'Juni',
//     'Juli',
//     'Agustus',
//     'September',
//     'Oktober',
//     'November',
//     'Desember',
//   ];
//   const monthNamesEn = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   // Split the date string into day, month, and year
//   const parts = dateString.split(' ');

//   // Convert the month name from Indonesian to English
//   const monthIndex = monthNamesId.indexOf(parts[1]);
//   if (monthIndex === -1) {
//     return 'Invalid date';
//   }
//   const monthEn = monthNamesEn[monthIndex];

//   // Create a new date string in English locale format
//   const dateStringEn = `${monthEn} ${parts[0]}, ${parts[2]}`;

//   // Parse the new date string
//   const parsedDate = new Date(dateStringEn);

//   // Format the parsed date in the desired locale
//   const formattedDate = parsedDate.toLocaleDateString(toLocale, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   return formattedDate;
// }
