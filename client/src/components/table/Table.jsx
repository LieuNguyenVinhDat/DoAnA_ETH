import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
        id: 1133155,
        product:"Acer Nitro 5",
        src:"https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
        customer:"Jhon Smith",
        date:"1 March",
        amount:785,
        method:"cash on delivery",
        status:"Approved"
    },
    {
        id: 2235235,
        product:"Playstation 5",
        src:"https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
        customer:"Michael Doe",
        date:"1 March",
        amount:900,
        method:"Online Payment",
        status:"Pending"
    },
    {
        id: 1648978,
        product:"Acer Nitro 5",
        src:"https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
        customer:"Lieu Nguyen Vinh Dat",
        date:"5 March",
        amount:800,
        method:"Online",
        status:"Approved"
    },
    {
        id: 3265486,
        product:"Asus ROG Strix",
        src:"https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
        customer:"Lieu Thi",
        date:"2 March",
        amount:920,
        method:"Online",
        status:"Pending"
    },
    {
        id: 2345841,
        product:"Razer Blade 15",
        src:"https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
        customer:"Lieu Nguyen",
        date:"1 March",
        amount:2000,
        method:"Online",
        status:"Pending"
    },
   
  ];
  return <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tableCell">Tracking ID</TableCell>
        <TableCell className="tableCell">Product</TableCell>
        <TableCell className="tableCell">Customer</TableCell>
        <TableCell className="tableCell">Date</TableCell>
        <TableCell className="tableCell">Amount</TableCell>
        <TableCell className="tableCell">Payment Method</TableCell>
        <TableCell className="tableCell">Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}>
          <TableCell className="tableCell">{row.id}</TableCell>
          <TableCell className="tableCell">
            <div className="cellWrapper"> 
            <img src={row.src} alt="" className="image"/>
            {row.product}
            </div>
          </TableCell>
          <TableCell className="tableCell">{row.customer}</TableCell>
          <TableCell className="tableCell">{row.date}</TableCell>
          <TableCell className="tableCell">{row.amount}</TableCell>
          <TableCell className="tableCell">{row.method}</TableCell>
          <TableCell className="tableCell">
            <span className={`status ${row.status}`}>{row.status}</span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>;
};

export default List;
