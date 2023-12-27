import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// routes config
import routes from "../route/route";
import Page404 from "../screens/pages/Page404";

const Content = () => {
    return (
        <div className="">
            <Suspense fallback={<div />}>
                <Switch>
                    {routes.map((route, idx) => {
                        return (
                            route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => <route.component {...props} />}
                                />
                            )
                        );
                    })}
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </Suspense>
        </div>
    )
}

export default React.memo(Content);