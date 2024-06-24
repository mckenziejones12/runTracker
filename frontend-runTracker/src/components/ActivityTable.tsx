interface ActivityTableType {
  dateHeader: string;
  milesHeader: string;
  paceHeader: string;
  HRHeader: string;
  calHeader: string;
  date: string;
  miles: number;
  pace: string;
  HR: number;
  cal: number;
}

export const ActivityTable = ({
  dateHeader,
  milesHeader,
  paceHeader,
  HRHeader,
  calHeader,
  date,
  miles,
  pace,
  HR,
  cal,
}: ActivityTableType) => {
  return (
    <>
      <table>
        <tr>
          <th>{dateHeader}</th>
          <th>{milesHeader}</th>
          <th>{paceHeader}</th>
          <th>{HRHeader}</th>
          <th>{calHeader}</th>
        </tr>
        <tr>
          <td>{date}</td>
          <td>{miles}</td>
          <td>{pace}</td>
          <td>{HR}</td>
          <td>{cal}</td>
        </tr>
      </table>
    </>
  );
};
