import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import eye from '@/assets/eye-off.svg'

type portData = {
    date: string,
    info: string,
}

const portDatas : PortData[] = [
    {
        date: "1 Oktober",
        info: "Ini info",
    },
    {
        date: "2 Oktober",
        info: "Ini info ke2",
    },
];

const TableView = () => {
    return (
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Info</TableHead>
      <TableHead><img src={eye}/></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {portDatas.map((data,index) => (
        <TableRow key={index}>
            <TableCell className="font-medium">
                <label>{data.date}</label>
            </TableCell>
            <TableCell>{data.info}</TableCell>
            <TableCell>symbol.svg</TableCell>
        </TableRow>
    ))};
  </TableBody>
</Table>

    )
}

export default TableView;