import React from 'react';

interface CalendarEvent {
  date: string;
  day: string;
  event: string;
}

interface MonthData {
  month: string;
  events: CalendarEvent[];
}

const AcademicCalendar: React.FC = () => {
  const calendarData: MonthData[] = [
    {
      month: "May",
      events: [
        { date: "15.05.23", day: "Monday", event: "School Reopens (Class X)" },
        { date: "29.05.23", day: "Monday", event: "School Reopens (Class I - VIII)" }
      ]
    },
    {
      month: "June",
      events: [
        { date: "12.06.23", day: "Monday", event: "Unit Test -I (Class X)" },
        { date: "17.06.23", day: "Saturday", event: "School Council Election" }
      ]
    },
    {
      month: "July",
      events: [
        { date: "10.07.23", day: "Monday", event: "Unit Test -I (Class I - IX)" },
        { date: "15.07.23", day: "Saturday", event: "Investiture Ceremony" },
        { date: "23.06.23", day: "Sunday", event: "PTM (Class X)" }
      ]
    },
    {
      month: "August",
      events: [
        { date: "15.08.23", day: "Tuesday", event: "Independence Day" },
        { date: "17.08.23", day: "Thursday", event: "Pre-Mid-Term Examination (Class I - X)" }
      ]
    },
    {
      month: "September",
      events: [
        { date: "09.10.23", day: "Saturday", event: "PTM (Class I - X)" }
      ]
    },
    {
      month: "October",
      events: [
        { date: "02.10.23", day: "Monday", event: "Gandhi Jayanthi" },
        { date: "09.10.23", day: "Monday", event: "Unit Test -2 (Class I-X)" },
        { date: "28.10.23", day: "Saturday", event: "PTM (Class X )" }
      ]
    },
    {
      month: "November",
      events: [
        { date: "01.11.23", day: "Wednesday", event: "Kannada Rajyotsava" },
        { date: "14.11.23", day: "Tuesday", event: "Childrens Day" },
        { date: "20.11.23", day: "Monday", event: "Mid-Term Examination (Class I-X)" },
        { date: "25.11.23", day: "Saturday", event: "PTM Class I-X" }
      ]
    },
    {
      month: "December",
      events: [
        { date: "04.12.23", day: "Monday", event: "Pre-Board Examination - 2 (Class-X)" },
        { date: "16.12.23", day: "Saturday", event: "PTM (Class-X)" }
      ]
    },
    {
      month: "January",
      events: [
        { date: "09.01.24", day: "Monday", event: "Unit Test -3 (Class I-X)" },
        { date: "09.01.24", day: "Monday", event: "Pre-Board Examination-3 (Class - X)" },
        { date: "27.01.24", day: "Saturday", event: "PTM (Class I -X)" }
      ]
    },
    {
      month: "February",
      events: [
        { date: "05.02.24", day: "Monday", event: "Annual Examination (Class -IX)" }
      ]
    },
    {
      month: "March",
      events: [
        { date: "04.03.24", day: "Monday", event: "School Re-opens (Class X - 2024-25)" },
        { date: "11.03.24", day: "Monday", event: "Annual Examination (Class I-VIII)" }
      ]
    },
    {
      month: "April",
      events: [
        { date: "10.04.2024", day: "Wednesday", event: "Result - I to VIII" }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Academic Calendar</h1>
        <p className="text-xl text-gray-600">2023-24 School Year</p>
        <div className="h-1 w-32 bg-blue-800 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-600">
                <th className="py-4 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">Month</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">Date</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">Day</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {calendarData.map((monthData) => (
                monthData.events.map((event, eventIdx) => (
                  <tr key={`${monthData.month}-${eventIdx}`} className="hover:bg-blue-50 transition-colors">
                    {eventIdx === 0 ? (
                      <td 
                        className="py-4 px-6 text-sm font-medium text-blue-800 bg-blue-50"
                        rowSpan={monthData.events.length}
                      >
                        {monthData.month}
                      </td>
                    ) : null}
                    <td className="py-4 px-6 text-sm text-gray-700">{event.date}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{event.day}</td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">{event.event}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default AcademicCalendar;