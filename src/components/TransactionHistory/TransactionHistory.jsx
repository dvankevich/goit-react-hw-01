import css from "./TransactionHistory.module.css";

export default function TransactionHistory({transactions}) {
  return (
    <table className={css.trTable}>
      <thead className={css.trTableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr className={css.trTableRow}>
          <td className={css.trTableColumn}>Invoice</td>
          <td className={css.trTableColumn}>125</td>
          <td className={css.trTableColumn}>USD</td>
        </tr>
        <tr className={css.trTableRow}>
          <td className={css.trTableColumn}>Withdrawal</td>
          <td className={css.trTableColumn}>85</td>
          <td className={css.trTableColumn}>USD</td>
        </tr>
      </tbody>
    </table>
  );
};