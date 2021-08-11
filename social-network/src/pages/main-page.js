import { Layout, Header, Footer} from "../components";

export function MainPage() {
  return <Layout header={<Header />} children={<h1>Content</h1>} footer={<Footer />}/>;
}
