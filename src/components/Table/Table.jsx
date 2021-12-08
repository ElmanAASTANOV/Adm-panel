import './style.scss'

const Table = ({ columns = [], data = [] }) => {
  return (<table>
    <thead>
      <tr>
        {columns?.map((column, index) => (<th key={index}>{column.title}</th>))}
      </tr>
    </thead>
    <tbody>

    {
        data?.map((d, index) => {
          return (
            <tr key={index}>
              {
                columns?.map( (column, iIndex) => {
                  let x;
                  if(column.render){
                   x = column.render(d);
                  } else {
                    x = d[column?.key];
                  }
                  return (
                    <td key = {iIndex}>{x}</td>
                  )
                } )
              }
            </tr>
          )
        })
      }
    </tbody>

  </table>);
}

export default Table;
