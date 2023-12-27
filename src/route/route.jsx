import { lazy } from "react";

const Home = lazy(() => import("../screens/Home"));
const Editor = lazy(() => import("../screens/Editor"));
const Landing = lazy(() => import("../screens/Landing"));
const About = lazy(() => import("../screens/AboutUs"));
const Plans = lazy(() => import("../screens/Plans"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const AddProject = lazy(() => import("../screens/AddProject"));
const ChooseTemp = lazy(() => import("../screens/ChooseTemp"));
const ChooseName = lazy(() => import("../screens/ChooseName"));
const Payment = lazy(() => import("../screens/Payment"));
const PaymentState = lazy(() => import("../screens/PaymentState"));
const AddTicket = lazy(() => import("../screens/AddTicket"));
const TicketMessage = lazy(() => import("../screens/TicketMessage"));
const AddAddress = lazy(() => import("../screens/AddAdress"));
// const PannelAdmin = lazy(() => import("../screens/PannelAdmin/PannelAdmin"));
const Setup = lazy(() => import("../screens/PannelAdmin/Setup"));
const HomePannel = lazy(() => import("../screens/PannelAdmin/Shop"));
const Tickets = lazy(() => import("../screens/PannelAdmin/Tickets"));
const Communications = lazy(() =>
  import("../screens/PannelAdmin/Communications")
);
const MyPages = lazy(() => import("../screens/PannelAdmin/MyPages"));
const MyTemplate = lazy(() => import("../screens/PannelAdmin/MyTemplate"));
const Orders = lazy(() => import("../screens/PannelAdmin/Orders"));
const Product = lazy(() => import("../screens/PannelAdmin/Product"));
const Products = lazy(() => import("../screens/PannelAdmin/Product"));
const Categories = lazy(() => import("../components/pages/product/Categories"));
const Analytics = lazy(() => import("../screens/PannelAdmin/Analytics"));
const MultiVendor = lazy(() => import("../screens/PannelAdmin/MultiVendor"));
const Payments = lazy(() => import("../components/pages/payments/Payments"));
const Invoices = lazy(() => import("../components/pages/payments/Invoices"));
const Users = lazy(() => import("../screens/PannelAdmin/Users"));
const Setting = lazy(() => import("../screens/PannelAdmin/Setting"));

// const Shop = lazy(() => import("../screens/PannelAdmin/Shop"));

const Profile = lazy(() => import("../screens/Profile"));

const routes = [
  { path: "/", exact: true, name: "City", component: Home },
  { path: "/landing", exact: true, name: "landing", component: Landing },
  { path: "/about", exact: true, name: "about", component: About },
  { path: "/plans", exact: true, name: "plans", component: Plans },
  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: Dashboard,
    render: (props) => {
      const activeTab =
        new URLSearchParams(props.location.search).get("active_tab") ||
        "default";
      return <Dashboard {...props} active_tab={activeTab} />;
    },
  },
  {
    path: "/dashboard/addproject",
    exact: true,
    name: "addproject",
    component: AddProject,
  },
  {
    path: "/dashboard/choosetemp",
    exact: true,
    name: "choosetemp",
    component: ChooseTemp,
  },
  {
    path: "/dashboard/choosename",
    exact: true,
    name: "choosename",
    component: ChooseName,
  },
  {
    path: "/dashboard/payment",
    exact: true,
    name: "payment",
    component: Payment,
  },
  {
    path: "/dashboard/paymentstate",
    exact: true,
    name: "paymentstate",
    component: PaymentState,
  },
  {
    path: "/dashboard/addticket",
    exact: true,
    name: "addticket",
    component: AddTicket,
  },
  {
    path: "/dashboard/ticketmessage",
    exact: true,
    name: "ticketmessage",
    component: TicketMessage,
  },
  {
    path: "/dashboard/addaddress",
    exact: true,
    name: "addaddress",
    component: AddAddress,
  },
  // { path: "/pannel", exact: true, name: "pannel", component: PannelAdmin },
  { path: "/pannel/setup", exact: true, name: "Setup", component: Setup },
  { path: "/pannel/home", exact: true, name: "home", component: HomePannel },
  { path: "/pannel/tickets", exact: true, name: "tickets", component: Tickets },
  {
    path: "/pannel/communications",
    exact: true,
    name: "communications",
    component: Communications,
  },
  { path: "/pannel/mypages", exact: true, name: "mypages", component: MyPages },
  {
    path: "/pannel/mytemplate",
    exact: true,
    name: "mytemplate",
    component: MyTemplate,
  },
  { path: "/pannel/orders", exact: true, name: "orders", component: Orders },
  { path: "/pannel/product", exact: true, name: "product", component: Product },
  {
    path: "/pannel/product/products",
    exact: true,
    name: "products",
    component: Products,
  },
  {
    path: "/pannel/product/categories",
    exact: true,
    name: "categories",
    component: Categories,
  },
  {
    path: "/pannel/analytics",
    exact: true,
    name: "analytics",
    component: Analytics,
  },

  {
    path: "/pannel/multivendor",
    exact: true,
    name: "multivendor",
    component: MultiVendor,
  },
  {
    path: "/pannel/payments",
    exact: true,
    name: "payments",
    component: Payments,
  },
  {
    path: "/pannel/payments/payment",
    exact: true,
    name: "payment",
    component: Payments,
  },
  {
    path: "/pannel/payments/invoices",
    exact: true,
    name: "invoices",
    component: Invoices,
  },
  {
    path: "/pannel/users",
    exact: true,
    name: "users",
    component: Users,
  },
  {
    path: "/pannel/setting",
    exact: true,
    name: "setting",
    component: Setting,
  },

  // { path: "/pannel/home", exact: true, name: "hime", component: Shop },

  { path: "/profile", exact: true, name: "profile", component: Profile },

  {
    path: "/editor/:pageId",
    exact: true,
    name: "editor",
    component: Editor,
  },
];

export default routes;
