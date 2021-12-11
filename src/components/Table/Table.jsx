import './style.scss'
import ReactLoading from 'react-loading';

const Table = ({ columns = [], data = [], loading = false, onClick = (record) => {} }) => {
  return (
    <>

      <table>
       { loading && <div className="table-loading"><ReactLoading type = "spin" color = "#1877f2"/></div>}
        <thead>
          <tr>
            {columns?.map((column, index) => (<th key={index}>{column.title}</th>))}
          </tr>
        </thead>
        <tbody>

          {
            data?.map((d, index) => {
              return (
                <tr onClick = {() =>{
                  onClick(d)
                }} key={index}>
                  {
                    columns?.map((column, iIndex) => {
                      let x;
                      if (column.render) {
                        x = column.render(d);
                      } else {
                        x = d[column?.key];
                      }
                      return (
                        <td key={iIndex}>{x}</td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </>);
}

export default Table;
