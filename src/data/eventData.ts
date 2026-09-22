export interface EventData {
  couple: {
    bride: string;
    groom: string;
    brideShort: string;
    groomShort: string;
    monogram: {
      bride: string;
      groom: string;
      combined: string;
    };
    tagline: string;
    romanticQuote: string;
    familyGreeting: string;
    announcement: string;
    eventType: string;
    eventTypeName: string;
    dateFormatted: string;
    targetDate: string;
    endDate: string;
    venueName: string;
    venueLocation: string;
    fullAddress: string;
    googleMapsUrl: string;
    contactPhone: string;
  };
  dateTime: {
    day: string;
    month: string;
    monthShort: string;
    monthUpper: string;
    year: string;
    yearSpaced: string;
    dayOfWeek: string;
    time: string;
    period: string;
    timeNote: string;
    dateFormatted: string;
    targetDate: string;
    endDate: string;
    timezone: string;
  };
  venue: {
    name: string;
    location: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    contactPhone: string;
  };
  blessings: {
    bismillahArabic: string;
    bismillahTranslation: string;
    chapterTitle: string;
    quranicArabic: string;
    quranicTranslation: string;
    verseCitation: string;
    warmBlessings: string;
    invitationNote: string;
    quranicVerse: string;
    verseSource: string;
  };
  closing: {
    header: string;
    arabicGreeting: string;
    subtext: string;
    authorWebsite: string;
    authorName: string;
  };
}

export const eventData: EventData = {
  couple: {
    bride: 'Muneera',
    groom: 'Abdul Hazariya',
    brideShort: 'Muneera',
    groomShort: 'Abdul Hazariya',
    monogram: {
      bride: 'M',
      groom: 'A',
      combined: 'M & A',
    },
    tagline: 'Two hearts, one blessed beginning.',
    romanticQuote: 'Our forever begins with Bismillah.',
    familyGreeting: 'TOGETHER WITH THEIR FAMILIES',
    announcement: 'WE ARE GETTING',
    eventType: 'Married',
    eventTypeName: 'Wedding',
    dateFormatted: 'Sunday, January 3, 2027',
    targetDate: '2027-01-03T11:30:00',
    endDate: '2027-01-03T20:00:00',
    venueName: 'S K Multipurpose Hall',
    venueLocation: 'Mudipu',
    fullAddress: 'S K Multipurpose Hall, Mudipu',
    googleMapsUrl: 'https://maps.app.goo.gl/xGqknq5WMQ7VHfUV6',
    contactPhone: '+917353390313',
  },
  dateTime: {
    day: '3',
    month: 'January',
    monthShort: 'Jan',
    monthUpper: 'JANUARY',
    year: '2027',
    yearSpaced: '2 0 2 7',
    dayOfWeek: 'Sunday',
    time: '11:30 AM',
    period: '25th of Rajab in the year 1448 AH (Hijri)',
    timeNote: 'Nikah Ceremony',
    dateFormatted: 'Sunday, January 3, 2027',
    targetDate: '2027-01-03T11:30:00',
    endDate: '2027-01-03T20:00:00',
    timezone: 'Asia/Kolkata',
  },
  venue: {
    name: 'S K Multipurpose Hall',
    location: 'Mudipu',
    city: 'Mudipu',
    fullAddress: 'S K Multipurpose Hall, Mudipu',
    googleMapsUrl: 'https://maps.app.goo.gl/xGqknq5WMQ7VHfUV6',
    contactPhone: '+917353390313',
  },
  blessings: {
    bismillahArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    bismillahTranslation: 'IN THE NAME OF ALLAH, THE MOST BENEFICENT AND THE MOST MERCIFUL',
    chapterTitle: 'A BLESSED CHAPTER',
    quranicArabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    quranicTranslation: 'And We created you in pairs',
    verseCitation: '— Surah An-Naba [78:8] —',
    warmBlessings: 'Join us to celebrate with your warm prayers & blessings.',
    invitationNote: 'WITH THE BLESSINGS OF OUR FAMILIES, WE JOYFULLY INVITE YOU TO JOIN US FOR THE WEDDING OF',
    quranicVerse:
      'And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts).',
    verseSource: '— Surah Ar-Rum (30:21)',
  },
  closing: {
    header: "WE CAN'T WAIT TO CELEBRATE THIS SPECIAL MOMENT WITH YOU",
    arabicGreeting: 'Jazak Allahu Khairan',
    subtext: 'Jazak Allahu Khairan for celebrating with us.',
    authorWebsite: 'http://goinvity.com/',
    authorName: 'GOINVITY',
  },
};
