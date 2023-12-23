import axios from "axios";
import { useEffect, useState } from "react";
import Affichearticlecard from "./Affichearticlecard";

const Listarticlecard = () => {
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    await axios
      .get("http://localhost:3001/api/articles/")
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("from listcat", article);

  return <Affichearticlecard article={article} />;
};

export default Listarticlecard;
