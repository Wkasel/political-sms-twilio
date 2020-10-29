// import Link from 'next/link'
import { DataTable } from '../components'
import { sampleData } from '../utils';


export default function Index() {
  return (
    <DataTable
      data={sampleData}
      csvDelimiter=","
      renderCell=""
      tableClassName="table table-striped table-hover"
    />
  )
}
