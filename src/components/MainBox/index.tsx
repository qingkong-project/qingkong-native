import { Badge, TabBar } from "antd-mobile";

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import "./index.less";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const MainBox = () => {
  const tabs = [
    {
      key: "home",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "welcome",
      title: "welcome",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "publish",
      title: "publish",
      icon: (active: boolean) => active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "me",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ];

  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history(value);
  };

  return <div id={'main-box'}>
        {/*<p>{pathname}</p>*/}
        <Outlet />


        <div className={'bottom'}>
            <TabBar activeKey={pathname.replace('/','')} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>

    </div>;
};

export default MainBox;
