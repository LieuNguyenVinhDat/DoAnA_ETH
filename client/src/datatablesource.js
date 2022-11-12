export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    filed: "user",
    headerName: "User",
    width: 230,
    renderCell: params => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 300
  },

  {
    field: "age",
    headerName: "Age",
    width: 150
  },

  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: params => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  }
];

//temporary
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat1@gmail.com",
    status: "active",
    age: 12
  },
  {
    id: 2,
    username: "dat",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat2@gmail.com",
    status: "passive",
    age: 60
  },
  {
    id: 3,
    username: "huy",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat3@gmail.com",
    status: "pending",
    age: 60
  },
  {
    id: 4,
    username: "khoa",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat4@gmail.com",
    status: "active",
    age: 60
  },
  {
    id: 5,
    username: "binh",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat4@gmail.com",
    status: "passive",
    age: 60
  },
  {
    id: 6,
    username: "vy",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat6@gmail.com",
    status: "active",
    age: 60
  },
  {
    id: 7,
    username: "nhung",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat7@gmail.com",
    status: "active",
    age: 60
  },
  {
    id: 8,
    username: "ngan",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat8@gmail.com",
    status: "passive",
    age: 60
  },
  {
    id: 9,
    username: "tu",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat9@gmail.com",
    status: "passive",
    age: 60
  },
  {
    id: 10,
    username: "nguyen",
    img: "https://cf.shopee.vn/file/d1c2ed798e0868b45caf281eb9d68139",
    email: "dat10@gmail.com",
    status: "active",
    age: 60
  }
];
