import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//antd组件
import {
  Layout,
  Form,
  Button,
  Menu,
  Input,
  Breadcrumb,
  Dropdown,
  Popconfirm,
  Table,
  Col,
  Row
} from 'ant-design-vue'

//css样式
import "ant-design-vue/dist/antd.css"


const app = createApp(App)
app
  .use(Layout)
  .use(Form)
  .use(Button)
  .use(Menu)
  .use(Input)
  .use(Breadcrumb)
  .use(Dropdown)
  .use(Popconfirm)
  .use(Table)
  .use(Col)
  .use(Row)



app.use(store).use(router).mount("#app");
