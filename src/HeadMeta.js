import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function HeadMeta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/basic.css" />
      <link rel="stylesheet" href="css/layout.css" />
      <link rel="stylesheet" href="css/blogs.css" />
      <link rel="stylesheet" href="css/ionicons.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/new-skin/new-skin.css" />
      <link rel="stylesheet" href="css/demos/demo-3-colors.css" />
      <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/gradient.css" />
      <link rel="shortcut icon" href="images/favicons/favicon.ico" />
    </Head>
  );
}
