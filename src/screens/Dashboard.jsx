// disable eslint
/* eslint-disable */
import { useHistory, } from "react-router-dom";
import useQuery from "../route/useQuery";
import { useEffect } from "react";

// SVGs
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as MyProjectIcon } from '../assets/icons/Note.svg';
import { ReactComponent as SupportIcon } from '../assets/icons/Chat.svg';
import { ReactComponent as BillingIcon } from '../assets/icons/payment.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/User.svg';
import SideBarDashboard from "../components/pages/dashboard/SideBarDashboard";
import DashboardDetails from "../components/pages/dashboard/DashboardDetails";
import DashboardMyProject from "../components/pages/myproject/DashboardMyProject";
import BillingDetails from "../components/pages/billing/BillingDetails";
import SupportDetails from "../components/pages/support/SupportDetails";
import AddressDetails from "../components/pages/address/AddressDetails";
import ProfileDetails from "../components/pages/profile/ProfileDetails";




const Dashboard = () => {
    const data = [
        { title: 'dashboard', image: <DashboardIcon className="text-text-20" />, imageSelected: <DashboardIcon className="text-white" />, slug: 'dashboard', hasRed: false },
        { title: 'My project', image: <MyProjectIcon className="text-text-20" />, imageSelected: <MyProjectIcon className="text-white" />, slug: 'myproject', hasRed: false },
        { title: 'billing', image: <BillingIcon className="text-text-20" />, imageSelected: <BillingIcon className="text-white" />, slug: 'billing', hasRed: true },
        { title: 'support ticket', image: <SupportIcon className="text-text-20" />, imageSelected: <SupportIcon className="text-white" />, slug: 'supportticket', hasRed: true },
        { title: 'address', image: <LocationIcon className="text-text-20" />, imageSelected: <LocationIcon className="text-white" />, slug: 'address', hasRed: false },
        { title: 'profile', image: <ProfileIcon className="text-text-20" />, imageSelected: <ProfileIcon className="text-white" />, slug: 'profile', hasRed: false },
    ]

    // const [activeTab, setActiveTab] = useState('');

    const queryParams = useQuery();
    const history = useHistory();

    useEffect(() => {
        console.log('acccccccc', queryParams.get("active_tab"));
        if (!queryParams.get("active_tab")) {
            history.push(`/dashboard?active_tab=dashboard`)
        }
    }, [])

    const SideBarComponents = ({ name }) => {
        let component;
        switch (name) {
            case 'dashboard':
                component = (
                    <DashboardDetails />
                );
                break;
            case 'myproject':
                component = (
                    <DashboardMyProject />
                );
                break;
            case 'billing':
                component = (
                    <BillingDetails />
                );
                break;
            case 'supportticket':
                component = (
                    <SupportDetails />
                );
                break;
            case 'address':
                component = (
                    <AddressDetails />
                );
                break;
            case 'profile':
                component = (
                    <ProfileDetails />
                );
                break;
            default:
                component = <div />
        }

        return component;

    }
    return (
        <div className="grid grid-cols-12 gap-x-10 px-8 mt-10">
            <div className="col-span-3">
                <SideBarDashboard data={data} />
            </div>
            <div className="col-span-9">
                <SideBarComponents name={queryParams.get("active_tab")} />
            </div>
        </div>
    );
};

export default Dashboard;
