import TodoOverviewPage from "./TodoOverviewPage";
import NotFoundPage from "./NotFoundPage";

const routes = [
  {
    path: "/",
    name: "overview",
    exact: true,
    component: TodoOverviewPage
  },
  {
    path: "*",
    name: "not-found",
    component: NotFoundPage
  }
];

export default routes;
