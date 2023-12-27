import { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom";

// SVGs
import { ReactComponent as Logo } from "../assets/logo/yobiti-logo-2.svg";
import { ReactComponent as SetupIcon } from "../assets/icons/slider.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/Home.svg";
import { ReactComponent as TicketIcon } from "../assets/icons/u_comment-question.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/Chat.svg";
import { ReactComponent as EditIcon } from "../assets/icons/Edit.svg";
import { ReactComponent as TemplateIcon } from "../assets/icons/template.svg";
import { ReactComponent as OrdersIcon } from "../assets/icons/Shop.svg";
import { ReactComponent as BagIcon } from "../assets/icons/Bag.svg";
import { ReactComponent as ChartIcon } from "../assets/icons/Chart.svg";
import { ReactComponent as VendorIcon } from "../assets/icons/shop-svgrepo.svg";
import { ReactComponent as PaymentIcon } from "../assets/icons/payment.svg";
import { ReactComponent as UsersIcon } from "../assets/icons/users.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/Setting.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/Logout.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";

const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();
  const [isProductListOpen, setIsProductListOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleProductIconClick = () => {
    setIsProductListOpen((prev) => !prev);
  };
  const handleIconClick = () => {
    setIsListOpen((prev) => !prev);
  };
  const [sideBarPannel] = useState([
    {
      headerTitle: "main",
      data: [
        {
          slug: "/setup",
          name: "setup",
          image: <SetupIcon className="text-text-20" />,
          imageSelected: <SetupIcon className="text-primary-5" />,
        },
        {
          slug: "/home",
          name: "home",
          image: <HomeIcon className="text-text-20" />,
          imageSelected: <HomeIcon className="text-primary-5" />,
        },
        {
          slug: "/tickets",
          name: "tickets",
          image: <TicketIcon className="text-text-20" />,
          imageSelected: <TicketIcon className="text-primary-5" />,
        },
        {
          slug: "/communications",
          name: "communications",
          image: <ChatIcon className="text-text-20" />,
          imageSelected: <ChatIcon className="text-primary-5" />,
        },
      ],
    },
    {
      headerTitle: "template and pages",
      data: [
        {
          slug: "/mypages",
          name: "mypages",
          image: <EditIcon className="text-text-20" />,
          imageSelected: <EditIcon className="text-primary-5" />,
        },
        {
          slug: "/mytemplate",
          name: "mytemplate",
          image: <TemplateIcon className="text-text-20" />,
          imageSelected: <TemplateIcon className="text-primary-5" />,
        },
      ],
    },
    {
      headerTitle: "store",
      data: [
        {
          slug: "/orders",
          name: "orders",
          image: <OrdersIcon className="text-text-20" />,
          imageSelected: <OrdersIcon className="text-primary-5" />,
        },
        {
          slug: "/product",
          name: "product",
          image: <BagIcon className="text-text-20" />,
          imageSelected: <BagIcon className="text-primary-5" />,
          products: {
            slug: "/products",
            name2: "products",
          },
          categories: {
            slug: "/categories",
            name2: "categories",
          },
        },
        {
          slug: "/analytics",
          name: "analytics",
          image: <ChartIcon className="text-text-20" />,
          imageSelected: <ChartIcon className="text-primary-5" />,
        },
        {
          slug: "/multivendor",
          name: "multivendor",
          image: <VendorIcon className="text-text-20" />,
          imageSelected: <VendorIcon className="text-primary-5" />,
        },
        {
          slug: "/payments",
          name: "payments",
          image: <PaymentIcon className="text-text-20" />,
          imageSelected: <PaymentIcon className="text-primary-5" />,
          payments: {
            slug: "/payment",
            name2: "payment",
          },
          invoices: {
            slug: "/invoices",
            name2: "invoices",
          },
        },
        {
          slug: "/users",
          name: "users",
          image: <UsersIcon className="text-text-20" />,
          imageSelected: <UsersIcon className="text-primary-5" />,
        },
      ],
    },
    {
      headerTitle: "settings",
      data: [
        {
          slug: "/setting",
          name: "setting",
          image: <SettingIcon className="text-text-20" />,
          imageSelected: <SettingIcon className="text-primary-5" />,
        },
      ],
    },
  ]);
  return (
    <aside
      className="relative flex flex-col justify-between h-screen overflow-y-scroll w-full"
      style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="flex flex-col py-5 px-7">
        <div className="flex items-center gap-x-3 mb-6">
          <Logo className="" />
          <p className="text-primary-20 font-normal text-h9">yoobiti</p>
        </div>
        {sideBarPannel.map((tab, index) => {
          return (
            <div key={index} className="flex flex-col w-full cursor-pointer ">
              <p className="text-primary-20 text-h10 font-medium mt-3">
                {tab.headerTitle}
              </p>
              {tab.data.map((child, index) => {
                return (
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <div
                        onClick={() => {
                          history.push(`/pannel${child.slug}`);
                        }}
                        key={index}
                        className={`flex items-center gap-x-2 my-3 cursor-pointer`}
                      >
                        {location.pathname.endsWith(child.slug) ? (
                          <>{child.imageSelected}</>
                        ) : (
                          <>{child.image}</>
                        )}
                        <p
                          className={`${
                            location.pathname.endsWith(child.slug)
                              ? "text-primary-5 font-medium"
                              : "text-text-20 font-normal"
                          } text-h9  capitalize`}
                          onClick={
                            child.name === "product"
                              ? handleProductIconClick
                              : child.name === "payments"
                              ? handleIconClick
                              : null
                          }
                        >
                          {child.name}
                        </p>
                      </div>
                      {child.products ? (
                        <ArrowRightIcon
                          className={`text-text-20  w-6 ${
                            isProductListOpen ? "-rotate-90" : "rotate-90"
                          }`}
                          onClick={handleProductIconClick}
                        />
                      ) : null}
                      {child.payments ? (
                        <ArrowRightIcon
                          className={`text-text-20  w-6 ${
                            isListOpen ? "-rotate-90" : "rotate-90"
                          }`}
                          onClick={handleIconClick}
                        />
                      ) : null}
                      {location.pathname.endsWith(child.slug) && (
                        //   location.pathname.endsWith(
                        //     `/product${child.categories.slug}`
                        //   ) ||
                        //   location.pathname.endsWith(
                        //     `/product${child.products.slug}`
                        //   ) ? (
                        <div className="w-1 h-6 bg-primary-5"></div>
                      )}
                    </div>
                    {isProductListOpen && (
                      <div className="flex flex-col ml-8">
                        {child.products ? (
                          <div
                            className="flex items-center "
                            onClick={() => {
                              history.push(
                                `/pannel/product${child.products.slug}`
                              );
                            }}
                          >
                            <ArrowRightIcon className="text-text-20 mr-3 w-5" />
                            <p
                              className={`${
                                location.pathname.endsWith(child.products.slug)
                                  ? "text-primary-5 font-medium"
                                  : "text-text-20 font-normal"
                              } text-h10  capitalize`}
                            >
                              {child.products.name2}
                            </p>
                          </div>
                        ) : null}
                        {child.categories && (
                          <div
                            className="flex items-center "
                            onClick={() => {
                              history.push(
                                `/pannel/product${child.categories.slug}`
                              );
                            }}
                          >
                            <ArrowRightIcon className="text-text-20 mr-3 w-5" />
                            <p
                              className={`${
                                location.pathname.endsWith(
                                  child.categories.slug
                                )
                                  ? "text-primary-5 font-medium"
                                  : "text-text-20 font-normal"
                              } text-h10  capitalize`}
                            >
                              {child.categories.name2}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {isListOpen && (
                      <div className="flex flex-col ml-8">
                        {child.payments ? (
                          <div
                            className="flex items-center "
                            onClick={() => {
                              history.push(
                                `/pannel/payments${child.payments.slug}`
                              );
                            }}
                          >
                            <ArrowRightIcon className="text-text-20 mr-3 w-5" />
                            <p
                              className={`${
                                location.pathname.endsWith(child.payments.slug)
                                  ? "text-primary-5 font-medium"
                                  : "text-text-20 font-normal"
                              } text-h10  capitalize`}
                            >
                              {child.payments.name2}
                            </p>
                          </div>
                        ) : null}
                        {child.invoices && (
                          <div
                            className="flex items-center "
                            onClick={() => {
                              history.push(
                                `/pannel/payments${child.invoices.slug}`
                              );
                            }}
                          >
                            <ArrowRightIcon className="text-text-20 mr-3 w-5" />
                            <p
                              className={`${
                                location.pathname.endsWith(child.invoices.slug)
                                  ? "text-primary-5 font-medium"
                                  : "text-text-20 font-normal"
                              } text-h10  capitalize`}
                            >
                              {child.invoices.name2}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-between items-center border-t border-t-neutral-70 py-5 gap-4"></div>
    </aside>
  );
};

export default Sidebar;
